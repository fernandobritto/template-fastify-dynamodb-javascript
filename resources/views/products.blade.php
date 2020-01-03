@extends('layout.app', ["current" => "products"])

@section('body')
    <h4>Product Page</h4>
    <div class="card border">
        <div class="card-body">

            @if(count($products_all) > 0)
                <table class="table table-ordered table-hover">
                    <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($products_all as $products)
                        <tr>
                            <td>{{ $products->id }}</td>
                            <td>{{ $products->name  }}</td>
                            <td>
                                <a href="/categories/edit/{{ $products->id }}" class="btn btn-sm btn-primary">Edit</a>
                                <a href="/categories/delete/{{ $products->id }}" class="btn btn-sm btn-danger">Delete</a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            @endif
        </div>
        <div class="card-footer">
            <a href="/products/new" class="btn btn-sm btn-primary" role="button">New Product</a>
        </div>
    </div>
@endsection
