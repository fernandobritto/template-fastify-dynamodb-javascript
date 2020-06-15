<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //protected $table = 'categories';
    //protected $primaryKey = 'id';

    // Mass Assignment
    protected $fillable=[
        'nombre', 'descripcion', 'condicion'
    ];
}
