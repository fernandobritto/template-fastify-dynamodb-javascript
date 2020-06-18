<template>
    <main class="main">
        <!-- Breadcrumb -->
        <ol class="breadcrumb">
            <li class="breadcrumb-item">Home</li>
            <li class="breadcrumb-item"><a href="#">Admin</a></li>
            <li class="breadcrumb-item active">Dashboard</li>
        </ol>
        <div class="container-fluid">
            <!-- Ejemplo de tabla Listado -->
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-align-justify"></i> Categorías
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modalNuevo">
                        <i class="icon-plus"></i>&nbsp;Nuevo
                    </button>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <div class="input-group">
                                <select class="form-control col-md-3" id="opcion" name="opcion">
                                    <option value="nombre">Nombre</option>
                                    <option value="descripcion">Descripción</option>
                                </select>
                                <input type="text" id="texto" name="texto" class="form-control" placeholder="Texto a buscar">
                                <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i> Buscar</button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-bordered table-striped table-sm">
                        <thead>
                        <tr>
                            <th>Opciones</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalNuevo">
                                    <i class="icon-pencil"></i>
                                </button> &nbsp;
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalEliminar">
                                    <i class="icon-trash"></i>
                                </button>
                            </td>
                            <td>Equipos</td>
                            <td>Dispositivos electrónicos</td>
                            <td>
                                <span class="badge badge-success">Activo</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalNuevo">
                                    <i class="icon-pencil"></i>
                                </button> &nbsp;
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalEliminar">
                                    <i class="icon-trash"></i>
                                </button>
                            </td>
                            <td>Equipos</td>
                            <td>Dispositivos electrónicos</td>
                            <td>
                                <span class="badge badge-success">Activo</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalNuevo">
                                    <i class="icon-pencil"></i>
                                </button> &nbsp;
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalEliminar">
                                    <i class="icon-trash"></i>
                                </button>
                            </td>
                            <td>Equipos</td>
                            <td>Dispositivos electrónicos</td>
                            <td>
                                <span class="badge badge-secondary">Inactivo</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalNuevo">
                                    <i class="icon-pencil"></i>
                                </button> &nbsp;
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalEliminar">
                                    <i class="icon-trash"></i>
                                </button>
                            </td>
                            <td>Equipos</td>
                            <td>Dispositivos electrónicos</td>
                            <td>
                                <span class="badge badge-secondary">Inactivo</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalNuevo">
                                    <i class="icon-pencil"></i>
                                </button>&nbsp;
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalEliminar">
                                    <i class="icon-trash"></i>
                                </button>
                            </td>
                            <td>Equipos</td>
                            <td>Dispositivos electrónicos</td>
                            <td>
                                <span class="badge badge-success">Activo</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <nav>
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#">Ant</a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">4</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">Sig</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- Fin ejemplo de tabla Listado -->
        </div>
        <!--Inicio del modal agregar/actualizar-->
        <div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-primary modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Agregar categoría</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label" for="text-input">Nombre</label>
                                <div class="col-md-9">
                                    <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre de categoría">
                                    <span class="help-block">(*) Ingrese el nombre de la categoría</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 form-control-label" for="email-input">Descripción</label>
                                <div class="col-md-9">
                                    <input type="email" id="descripcion" name="descripcion" class="form-control" placeholder="Enter Email">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!--Fin del modal-->
        <!-- Inicio del modal Eliminar -->
        <div class="modal fade" id="modalEliminar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-danger" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Eliminar Categoría</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Estas seguro de eliminar la categoría?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- Fin del modal Eliminar -->

    </main>
</template>

<script>
    export default {
        data (){
            return {
                nombre : '',
                descripcion : '',
                arrayCategoria : [],
                modal : 0,
                tituloModal : '',
                tipoAccion : 0,
                errorCategoria : 0,
                errorMostrarMsjCategoria : []
            }
        },
        methods : {
            listarCategoria (){
                let me=this;
                axios.get('/categoria').then(function (response) {
                    me.arrayCategoria = response.data;
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            registrarCategoria(){
                if (this.validarCategoria()){
                    return;
                }

                let me = this;

                axios.post('/categoria/registrar',{
                    'nombre': this.nombre,
                    'descripcion': this.descripcion
                }).then(function (response) {
                    me.cerrarModal();
                    me.listarCategoria();
                }).catch(function (error) {
                    console.log(error);
                });
            },
            validarCategoria(){
                this.errorCategoria=0;
                this.errorMostrarMsjCategoria =[];

                if (!this.nombre) this.errorMostrarMsjCategoria.push("El nombre de la categoría no puede estar vacío.");

                if (this.errorMostrarMsjCategoria.length) this.errorCategoria = 1;

                return this.errorCategoria;
            },
            cerrarModal(){
                this.modal=0;
                this.tituloModal='';
                this.nombre='';
                this.descripcion='';
            },
            abrirModal(modelo, accion, data = []){
                switch(modelo){
                    case "categoria":
                    {
                        switch(accion){
                            case 'registrar':
                            {
                                this.modal = 1;
                                this.tituloModal = 'Registrar Categoría';
                                this.nombre= '';
                                this.descripcion = '';
                                this.tipoAccion = 1;
                                break;
                            }
                            case 'actualizar':
                            {

                            }
                        }
                    }
                }
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
