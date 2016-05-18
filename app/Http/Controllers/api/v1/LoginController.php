<?php

namespace App\Http\Controllers\api\v1;
use App\Http\Controllers\Controller;
use Request;
use DB;

class LoginController extends Controller
{
    public function index(){
      session_start();
      $usuario = Request::input('usuario');
      $password = Request::input('password');

      $usuario = DB::table('usuarios')
      ->where('usuario', $usuario)
      ->where('password', $password)
      ->first();

      $status = array(
        'code'=>200
      );

      if($usuario){
        $_SESSION['id']=$usuario->id;
        $status['data']=$usuario;
        return $status;
      }else{
        $status['code']=404;
        return $status;
      }

    }

    public function logout(){
      session_start();
      session_destroy();
      return 'ok';
    }

}
