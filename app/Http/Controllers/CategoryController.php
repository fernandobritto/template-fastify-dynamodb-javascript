<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{

    public function index(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');
        $categories = Category::all();
        return $categories;
    }



    public function store(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');

        $category = new Category();
        $category->name = $request->name;
        $category->description = $request->description;
        $category->condition = '1';
        $category->save();
    }



    public function update(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');
        $category = Category::findOrFail($request->id);
        $category->name = $request->name;
        $category->description = $request->description;
        $category->condition = '1';
        $category->save();
    }



    public function disable(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');

        $category = Category::findOrFail($request->id);
        $category->condicion = '0';
        $category->save();
    }



    public function enable(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');

        $category = Category::findOrFail($request->id);
        $category->condicion = '1';
        $category->save();
    }


}
