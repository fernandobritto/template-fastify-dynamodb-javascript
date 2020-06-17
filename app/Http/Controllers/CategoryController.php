<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{

    public function index(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');

        $categ = Category::all();
        return $categ;
    }


    public function store(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');

        $category = new Categoria();
        $category->nombre = $request->nombre;
        $category->descripcion = $request->descripcion;
        $category->condicion = '1';
        $category->save();
    }

    public function update(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');

        $categ = Categoria::findOrFail($request->id);
        $categ->nombre = $request->nombre;
        $categ->descripcion = $request->descripcion;
        $categ->condicion = '1';
        $categ->save();
    }

    public function disable(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');

        $category = Categoria::findOrFail($request->id);
        $category->condicion = '0';
        $category->save();
    }

    public function enable(Request $request)
    {
        //if (!$request->ajax()) return redirect('/');

        $category = Categoria::findOrFail($request->id);
        $category->condicion = '1';
        $category->save();
    }
}
