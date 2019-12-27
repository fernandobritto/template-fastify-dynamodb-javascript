@extends('layout.app', ["current" => "home"])

@section('body')
    <div class="jumbotron bg-light border-secondary">
        <div class="row">
            <div class="card-deck">
                <div class="card border border-primary">
                    <div class="card-body">
                        <h5 class="card-title">Product Registration</h5>
                        <p class="card-text">
                            Here you register all your products.
                            Just don't forget to block the categories first.
                        </p>
                        <a href="/products" class="btn btn-primary">Register your products</a>
                    </div>
                </div>

                <div class="card border border-primary">
                    <div class="card-body">
                        <h5 class="card-title">Category Registration</h5>
                        <p class="card-text">
                            Subscribe to your product categories.
                        </p>
                        <a href="/categories" class="btn btn-primary">Register your categories</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
