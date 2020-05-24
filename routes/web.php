<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('content/content');
});

Route::get('/category', 'CategoryController@index');
//Route::post('/category/registrar', 'CategoryController@store');
//Route::put('/category/actualizar', 'CategoryController@update');
//Route::put('/category/desactivar', 'CategoryController@disable');
//Route::put('/category/activar', 'CategoryController@enable');
