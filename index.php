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
    <div class="page_wrap" id="index">
        <canvas class="background" id="canvas"></canvas>
        <div class="fixed_stuff">
            <a href="" class="logo">Logo</a>
            <ul class="header_nav clear">
                <li class="backlight" id="S_controller">Sign up</li>
                <li>/</li>
                <li class="backlight" id="L_controller">Login</li>
            </ul>
            <ul class="footer_nav" id="footer_nav">
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
            <div class="mouse">
                <div class="mouse_wheel"></div>
            </div>
        </div>
        <div class="content_wrap" id="content_wrap">
            <div class="section first_section">
                <div class="container">
                    <div class="w">
                        <div class="w_i">Dream</div>
                        <div class="w_i">Work hard</div>
                        <div class="w_i">and world will</div>
                        <div class="w_i">become better</div>
                        <div class="w_i">caps lock</div>
                    </div>
                </div>
            </div>
            <div class="section second_section">
                <div class="container">
                    <div class="ss">
                        <div class="ss_h">
                            What is this
                        </div>
                        <div class="ss_t">
                            This is a service for people, which want to change the world to better. Get a crew, or, if u re a giant, try it solo.
                        </div>
                        <div class="ss_h">
                            Beat the chaos
                        </div>
                        <div class="ss_t">
                            There is a lot of strong services to optimize your work. And u can work at any time, at any plase. All u need - internet connection. Cool, right?
                        </div>
                        <div class="ss_h">
                            Why we are
                        </div>
                        <div class="ss_t">
                            Oh, thats simple. We are dreamers and enthusiasts, we want to make this world better.
                        </div>
                    </div>
                    <div class="ss_2">
                        <div class="ss_2_t center">Strength is here</div>
                    </div>
                </div>
            </div>
            <div class="section third_section">
                <div class="container">
                    <form action="server/signup.php" method="post" class="signup center showed" id="signup" name="signup_form">
                        <div class="center">
                            <div class="signup_h">Create account</div>
                            <div class="form_block">
                                <div class="form_r">
                                    <div class="form_t">Name</div>
                                    <input type="text" class="form_i" id="name" name="name" autocomplete="off">
                                </div>
                                <div class="form_r">
                                    <div class="form_t">Surname</div>
                                    <input type="text" class="form_i" id="surname" name="surname" autocomplete="off">
                                </div>
                                <div class="form_r">
                                    <div class="form_t">
                                        Age
                                        <div class="form_tip_controller"></div>
                                        <div class="form_tip hidden">
                                            Your age. Optional field.
                                        </div>
                                    </div>
                                    <input type="text" class="form_i" id="age" name="age" autocomplete="off">
                                </div>
                                <div class="form_r">
                                    <div class="form_t">
                                        Gender
                                    </div>
                                    <div class="form_r_center">
                                        <label class="gender_radio">
                                            <input type="radio" name="gender_radio" value="male">
                                            <span class="radio"></span>Male
                                        </label>
                                        <label class="gender_radio">
                                            <input type="radio" name="gender_radio" value="female">
                                            <span class="radio"></span>Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form_block">
                                <div class="form_r">
                                    <div class="form_t">
                                        Email
                                        <div class="form_tip_controller"></div>
                                        <div class="form_tip hidden">
                                            Yep, I know about 10 minute email services. Input your real e-mail, please. It is important.
                                        </div>
                                    </div>
                                    <input type="text" class="form_i" id="email" name="email" autocomplete="off">
                                </div>
                                <div class="form_r">
                                    <div class="form_t">
                                        Phone
                                        <div class="form_tip_controller"></div>
                                        <div class="form_tip hidden">
                                            If you input your phone, we will send access codes and notices on this number. It's free. 
                                        </div>
                                    </div>
                                    <input type="text" class="form_i" id="phone" name="phone" autocomplete="off">
                                </div>
                                <div class="form_r">
                                    <div class="form_t">
                                        Password
                                        <div class="form_tip_controller"></div>
                                        <div class="form_tip hidden">
                                            Create strong password. Password "password" is not good password, isn't it?
                                        </div>
                                    </div>
                                    <input type="password" class="form_i" id="password" name="password">
                                    
                                </div>
                                <div class="form_r">
                                    <label class="privacy_checkbox">
                                        <input type="checkbox" name="privacy" value="agree">
                                        <span class="checkbox"></span>I agree with <a href="">privacy policy</a>
                                    </label>
                                </div>
                            </div>
                            <div class="form_r">
                                <div class="form_r_center">
                                    <input type="submit" name="sign_up" class="form_btn" value="Sign up">
                                </div>
                            </div>
                        </div>
                    </form>
                    <form action="server/login.php" method="post" class="login center hidden" id="login" name="login_form">
                        <div class="center">
                            <div class="login_h">Welcome back</div>
                            <div class="form_r">
                                <div class="form_t">
                                    Login
                                    <div class="form_tip_controller"></div>
                                    <div class="form_tip hidden">
                                        Input login. Email or phone number, as you wish. 
                                    </div>
                                </div>
                                <input type="text" class="form_i" name="login">
                            </div>
                            <div class="form_r">
                                <div class="form_t">
                                    Password
                                    <div class="form_tip_controller"></div>
                                    <div class="form_tip hidden">
                                        Forgot something? No problem, <a href="" class="link backlight">go here</a>.
                                    </div>
                                </div>
                                <input type="password" class="form_i" name="password">
                            </div>
                            <div class="form_r">
                                <div class="form_r_center">
                                    <input type="submit" class="form_btn" value="Login">    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="scripts/scripts.js"></script>
</body>
</html>