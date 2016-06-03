<?php

namespace App\Http\Controllers\api\v1;
use App\Http\Controllers\Controller;
use Request;
use DB;

class CategoriesController extends Controller
{
    public function categories(){
          $categories = DB::table('categorias')
          ->where('status', '=', 1)
          ->get();
          return $categories;
    }

    public function new_category(){
      $name = Request::input('name','');
      $result=DB::table('categorias')->insert(
  			array('nombre' => $name, 'status'=>1)
  		);
      if(count($result) == 1){
  			$res=array(
  			'code' => 200,
  			'msg' => 'ok'
  			);

  		}else{
  			$res=array(
  			'code' => 300,
  			'msg' => 'bad'
  			);
  		}
    return $res;
  }

  public function usersCategories(){
    $My_ID = 6;
    $arr = [];
    $id_test = [];
    $r = [];
    $usersCategories = DB::table('usuarios_categorias')
    ->where('id_usuario', '=', $My_ID)
    ->get();

    $count = DB::table('usuarios_categorias')
    ->where('id_usuario', '=', $My_ID)
    ->where('status', '=', 1)
    ->count();

    for ($i=0; $i < $count ; $i++) {
      $categories = DB::table('categorias')
      ->where('id', '=', $usersCategories[$i]->id_categoria)
      ->get();

      $id = $usersCategories[$i]->id;
      array_push($id_test, $id);
      array_push($arr, $categories[0]);
    }

    $r=array(
      'code' => 200,
      'msg' => 'ok',
      'id_test' => $id_test,
      'arr' =>$arr
      );
    return $r;


  }
}
