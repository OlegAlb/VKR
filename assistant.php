<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="fonts/fonts.css">
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="styles/animation.css">
</head>
<body>
    <div class="page_wrap" id="assistant">
        <canvas class="background" id="canvas"></canvas>
        <div class="fixed_stuff">
            <a href="" class="logo">Logo</a>
            <ul class="menu clear">
                <li>Nitices</li>
                <li>Messages</li>
                <li>Settings</li>
                <li class="user">John Doe</li>
            </ul>
            <ul class="footer_nav" id="footer_nav">
                <li class="active"></li>
                <li></li>
            </ul>
            <div class="mouse">
                <div class="mouse_wheel"></div>
            </div>
        </div>
        <div class="content_wrap" id="content_wrap">
            <div class="section first_section">
                <div class="container container">
                </div>
            </div>
            <div class="section second_section">
                <div class="container clear">
                    <div class="left_sidebar">
                        <div class="calendar_left">
                            <div class="todo">
                                <div class="todo_h">Hello, dude. Whats on today?</div>
                                <div class="todo_list">
                                    <div class="todo_inner" id="todo_tasks">
                                        <div class="todo_tasks" >
<!--
                                            <div class="todo_task">
                                                Task #1
                                                <div class="complete_btn"></div>
                                            </div>
                                            <div class="todo_task">
                                                Task #2
                                                <div class="complete_btn"></div>
                                            </div>
                                            <div class="todo_task">
                                                Task #3
                                                <div class="complete_btn"></div>
                                            </div>
-->
                                        </div>
                                    </div>
                                    <form action="server/server.php" method="post" class="todo_add clear"  name="todo_add_form" id="todoForm">
                                        <input type="text" class="todo_add_input" id="todo_input" autocomplete="off" name="todo_input">
                                        <input type="submit" class="todo_add_btn" name="todo_add" value="Add">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right_sidebar">
                        <div class="calendar_right">
                            <div class="calendar">
                                <div class="calendar_h" id="calendar_h">
                                    
                                </div>
                                <div class="clear" id="calendar">

                                </div>
                                <div class="calendar_control left" id="calendar_control_left"></div>
                                <div class="calendar_control right" id="calendar_control_right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="scripts/scripts.js"></script>
</body>
</html>