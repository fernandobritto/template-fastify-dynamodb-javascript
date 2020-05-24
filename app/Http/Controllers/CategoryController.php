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
        if (!$request->ajax()) return redirect('/');

        $catgory = new Category();
        $catgory->name = $request->name;
        $catgory->description = $request->description;
        $catgory->condition = '1';
        $catgory->save();
    }



    public function update(Request $request)
    {
        if (!$request->ajax()) return redirect('/');

        $catgory = Category::findOrFail($request->id);
        $catgory->name = $request->name;
        $catgory->description = $request->description;
        $catgory->condition = '1';
        $catgory->save();
    }



    public function disable(Request $request)
    {
        if (!$request->ajax()) return redirect('/');

        $catgory = Category::findOrFail($request->id);
        $catgoria->condicion = '0';
        $catgoria->save();
    }



    public function enable(Request $request)
    {
        if (!$request->ajax()) return redirect('/');

        $catgoria = Category::findOrFail($request->id);
        $catgoria->condicion = '1';
        $catgoria->save();
    }


}
