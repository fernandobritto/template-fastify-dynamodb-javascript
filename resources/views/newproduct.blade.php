@extends('layout.app', ["current" => "products"])

@section('body')
    <h4>New Product </h4>

    <div class="card border">
        <div class="card-body">
            <form action="/products" method="POST">
                @csrf
                <div class="form-group">
                    <label for="nameProduct">Name</label>
                    <input type="text" class="form-control" name="nameProduct" id="nameProduct" placeholder="Product">
                </div>
                <button type="submit" class="btn-primary btn-sm"> Send </button>
                <button type="cancel" class="btn-danger btn-sm">Cancel</button>
            </form>
        </div>
    </div>
@endsection
