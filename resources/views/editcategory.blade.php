@extends('layout.app', ["current" => "categories"])

@section('body')
    <h4>Edit Category</h4>

    <div class="card border">
        <div class="card-body">
            <form action="/categories/{{ $category->id }}" method="POST">
                @csrf
                <div class="form-group">
                    <label for="nameCategory">Name</label>
                    <input type="text" class="form-control" name="nameCategory" value="{{$category->name}}" id="nameCategory" placeholder="Category">
                </div>
                <button type="submit" class="btn-primary btn-sm"> Send </button>
                <button type="cancel" class="btn-danger btn-sm">Cancel</button>
            </form>
        </div>
    </div>

@endsection
