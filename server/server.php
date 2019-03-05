<?php
    include "config.php";

/*** LOGIN SCRIPT ***/

    if($_POST['method_name'] == 'login'){
        $get_user = mysqli_prepare($connect, "SELECT userId, name, surname, email, phone, password FROM users WHERE email = ? OR phone = ? LIMIT 1");
        mysqli_stmt_bind_param($get_user, "ss", $_POST['login'], $_POST['login']);
        mysqli_stmt_execute($get_user);
        mysqli_stmt_bind_result($get_user, $userId, $name, $surname, $email, $phone, $password);
        mysqli_stmt_fetch($get_user);
        mysqli_stmt_close($get_user);
        //массив ошибок
        $errors = [];
        //при возникновении ошибок заполняем массив
        //логин не найден
        if($email != $_POST['login'] && $phone != $_POST['login']){
            $errors[] = "ERROR: login not found.";
        }
        //пароль не найден
        if(!password_verify($_POST['password'], $password)){
            $errors[] = "ERROR: password is incorrect";
        }
        //массив пуст - ошибок нет. Авторизуемся.
        if(empty($errors)){
            $_SESSION['logged_user'] = $userId;
            $_SESSION['logged_user_name'] = $name;
            $_SESSION['logged_user_surname'] = $surname;
            die();
        } else {
            var_dump($errors);
        }
    }
/*** SIGN UP SCRIPT ***/ 

    //кнопка нажата
    if($_POST['method_name'] == 'sign_up'){
        //Подготовленные запросы.
        //Запрос, который делает прроверку на наличие логина в бд.
        $get_login = mysqli_prepare($connect, "SELECT email FROM users WHERE email= ? LIMIT 1");
        mysqli_stmt_bind_param($get_login, "s", $_POST['email']);
        mysqli_stmt_execute($get_login);
        $count_login = mysqli_stmt_get_result($get_login);
        //массив ошибок
        $errors = [];
        //при возникновении ошибок заполняем массив
        //такой пользователь уже есть
        if(mysqli_num_rows($count_login)>0){
            $errors[] = "ERROR: User with this email already exists.";
        }
        
        //имя ситаксически не верно
        if(preg_match('/^[a-zA-Z][\w]{2,20}/', $_POST['name']) !== 1){
            $errors[] = "ERROR: Name is incorrect.";
        }
        //фамилия ситаксически не верна
        if(preg_match('/^[a-zA-Z][\w]{2,20}/', $_POST['surname']) !== 1){
            $errors[] = "ERROR: Surname is incorrect.";
        }
        //возраст ситаксически не верный
        if(preg_match('/^[0-9]{1,3}/', $_POST['age']) !== 1 || $_POST['age'] == ''){
            $errors[] = "ERROR: Age is incorrect.";
        }
        
        //указывать пол не обязательно, но валидировать всё равно нужно
        
        if($_POST['gender_radio'] !== 'male' && $_POST['gender_radio'] !== 'female' && $_POST['gender_radio'] !== ''){
            $errors[] = "ERROR: Gender is incorrect.";
        }
        
        //email ситаксически не верный
        if(preg_match('/^[a-zA-Z0-9]*[\w\.]+\@[\w\.]+/', $_POST['email']) !== 1){
            $errors[] = "ERROR: Email is incorrect.";
        }
        //телефон ситаксически не верный
        if(preg_match('/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/', $_POST['phone']) !== 1){
            $errors[] = "ERROR: Phone is incorrect.";
        }
        //пароль синтаксически не верный
        if(preg_match('/\w{7,15}/', $_POST['password']) !== 1){
            $errors[] = "ERROR: Password is incorrect.";
        }
        
        //нет согласия с политикой конфиденциальности
        if($_POST['privacy'] !== 'agree'){
            $errors[] = "ERROR: Private policy agreement does not exist.";
        }
        //Запрос, который регистрирует нового пользователя
        $add_user = mysqli_prepare($connect, "INSERT INTO users (userID, name, surname,	age, gender, email, phone, password, signUpDate) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, NOW())");
        $_POST['password'] = password_hash($_POST['password'], PASSWORD_DEFAULT);
        mysqli_stmt_bind_param($add_user, "sssssss", $_POST['name'], $_POST['surname'], $_POST['age'], $_POST['gender_radio'], $_POST['email'], $_POST['phone'], $_POST['password']);
        //массив пуст - ошибок нет. Регистрируем.
        if(empty($errors)){
            //исполнение подготовленного зпроса
            mysqli_stmt_execute($add_user);
            mysqli_stmt_close($add_user);
            header('Location: ../assistant.php');
            die();
        } else {
            var_dump($errors);
        }
        return;
    }

/*** TODO ADD TASK SCRIPT ***/
    if($_POST['method_name'] == 'todo_add'){
        //Подготовленные запросы.
        $add_task = mysqli_prepare($connect, "INSERT INTO tasks (id, owner_id, text, target_time, created, edited) VALUES (NULL, ?, ?, ?, NOW(), NULL)");
        mysqli_stmt_bind_param($add_task, "sss", $_SESSION['logged_user'], $_POST['todo_input'], date("Y-m-d H:i:s", $_POST['firstTS']));
        //исполнение подготовленного зпроса
        mysqli_stmt_execute($add_task);
        mysqli_stmt_close($add_task);
        var_dump($_SESSION);
        die();
        return;
    }

/*** TODO OUTPUT SCRIPT ***/
    if($_POST['method_name'] == 'todo_output'){
        $get_task = mysqli_prepare($connect, "SELECT id, text FROM tasks WHERE owner_id = ? AND target_time >= ? AND target_time < ?");
        mysqli_stmt_bind_param($get_task, "sss", $_SESSION['logged_user'], date("Y-m-d H:i:s", $_POST['firstTS']), date("Y-m-d H:i:s", $_POST['secondTS']));
        mysqli_stmt_execute($get_task);
        $result = mysqli_stmt_get_result($get_task);
        $data = array();
        while ($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
        }
        echo json_encode($data);
        mysqli_stmt_close($get_task);
    }
?>