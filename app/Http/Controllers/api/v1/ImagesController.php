<?php

namespace App\Http\Controllers\api\v1;
use App\Http\Controllers\Controller;
use Request;
use DB;

class ImagesController extends Controller
{
    public function index(){
      $images=DB::table('imagenes')
      ->get();
      $length = count($images);
      $random = rand(1, $length);
      $image=DB::table('imagenes')
      ->where('id', '=', $random)
      ->get();
      return $image;
    }
    public function get_images(){
      $images=DB::table('imagenes')
      ->get();
      return $images;
    }

}
