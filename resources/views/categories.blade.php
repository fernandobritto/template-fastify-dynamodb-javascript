@extends('layout.app', ["current" => "categories"])

@section('body')
    <h4>Category Page</h4>
    <div class="card border">
        <div class="card-body">

            @if(count($categories_all) > 0)
            <table class="table table-ordered table-hover">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($categories_all as $categories)
                    <tr>
                        <td>{{ $categories->id }}</td>
                        <td>{{ $categories->name  }}</td>
                        <td>
                            <a href="/categories/edit/{{ $categories->id }}" class="btn btn-sm btn-primary">Edit</a>
                            <a href="/categories/delete/{{ $categories->id }}" class="btn btn-sm btn-danger">Delete</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
            </table>
            @endif
        </div>
        <div class="card-footer">
            <a href="/categories/new" class="btn btn-sm btn-primary" role="button">New Category</a>
        </div>
    </div>
@endsection
