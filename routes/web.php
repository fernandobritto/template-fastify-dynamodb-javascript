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
    return view('index');
});

Route::get('/products', 'ProductController@index');
Route::get('/products/new', 'ProductController@create');
Route::post('/products', 'ProductController@store');



Route::get('/categories', 'CategoryController@index');
Route::get('/categories/new', 'CategoryController@create');
Route::post('/categories', 'CategoryController@store');

Route::get('/categories/delete/{id}', 'CategoryController@destroy');
Route::get('/categories/edit/{id}', 'CategoryController@edit');
Route::post('/categories/{id}', 'CategoryController@update');
