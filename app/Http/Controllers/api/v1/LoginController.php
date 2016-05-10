<?php

namespace App\Http\Controllers\api\v1;
use App\Http\Controllers\Controller;
use Request;
use DB;

class LoginController extends Controller
{
    public function index(){
      $data = DB::table('usuarios')->get();
      return $data;
    }
}
