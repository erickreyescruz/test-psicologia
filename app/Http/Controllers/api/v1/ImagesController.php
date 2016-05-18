<?php

namespace App\Http\Controllers\api\v1;
use App\Http\Controllers\Controller;
use Request;
use DB;

class ImagesController extends Controller
{
    public function index($id){
      $image=DB::table('imagenes')
      ->where('id', '=', $id)
      ->get();
      return $image;
    }
}
