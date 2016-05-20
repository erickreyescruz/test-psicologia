<?php

namespace App\Http\Controllers\api\v1;
use App\Http\Controllers\Controller;
use Request;
use DB;

class UsersController extends Controller
{
    public function Users(){
      $users = DB::table('usuarios')
      ->get();
      return $users;
    }
}
