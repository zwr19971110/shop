<?php
    //后端到数据库里找是否存在用户和密码
    include "./chinese.php";
    $username=$_POST['un'];
    $password=$_POST['mm'];
    $conn=mysqli_connect('localhost','root','root','music');
    $sql="SELECT*FROM `user` WHERE `username`='$username' AND `password`='$password'";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($res);
    mysqli_close($conn);
    if($row){
        echo "true";
    }else{
        echo "用户名或密码错误";
    }
    
?>