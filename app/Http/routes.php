<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Blade::setContentTags('<%', '%>');
Blade::setEscapedContentTags('<%%', '%%>');

Route::get('/', function () {
    return view('index');
});

Route::post('api/v1/login', 'api\v1\LoginController@index');
Route::post('api/v1/logout', 'api\v1\LoginController@logout');

Route::post('api/v1/register', 'api\v1\RegisterController@index');

Route::post('api/v1/Users', 'api\v1\UsersController@Users');

Route::post('api/v1/images/{id}', 'api\v1\ImagesController@index');
