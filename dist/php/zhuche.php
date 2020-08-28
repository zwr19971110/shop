<?php
    include "./chinese.php";
    $username=$_POST['un'];
    $password=$_POST['mm'];
    $conn=mysqli_connect('localhost','root','root','music');
    $sql="SELECT*FROM `user` WHERE `username`='$username'";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($res);
    mysqli_close($conn);
    if($row){
        echo "false";
    }else{
        echo "注册成功!";
        $conn1=mysqli_connect('localhost','root','root','music');
        $sql1="INSERT INTO `user` VALUES(null,'$username','$password')";
        $res1=mysqli_query($conn1,$sql1);
        mysqli_close($conn1);
    }
?>