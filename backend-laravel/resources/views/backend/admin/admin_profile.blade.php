@extends('admin.admin_master')

@section('title')Thông tin @endsection

@section('content')
<div class="page-wrapper">
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Thông tin cá nhân</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Cá nhân</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    
                                    <div class="mt-3">
                                        <h4>{{ $adminData->first_name }} {{ $adminData->last_name }}</h4>
                                        <p class="text-secondary mb-1">{{ $adminData->email }}</p>
                                        <p class="text-muted font-size-sm">TP Thủ Đức,TPHCM</p>
                                        <button class="btn btn-primary">Follow</button>
                                        <button class="btn btn-outline-primary">Message</button>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <ul class="list-group list-group-flush">
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header bg-white">
                                <h4 class="mt-2">Thông tin </h4>
                            </div>
                            <div class="card-body">
                                <form action="{{ route('user.profile.store') }}" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">First Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="first_name" type="text" class="form-control" value="{{ $adminData->first_name }}" disabled />
                                            @error('first_name')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Last Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="last_name" type="text" class="form-control" value="{{ $adminData->last_name }}" disabled />
                                            @error('last_name')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="email" type="text" class="form-control" value="{{ $adminData->email }}" disabled />
                                            @error('email')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Hình ảnh</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input name="profile_photo_path" class="form-control" type="file" id="image" disabled />
                                            @error('profile_photo_path')
                                            <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <img id="showImage" src="{{ (!empty($adminData->profile_photo_path)) 
                                        ? url('upload/admin_images/'.$adminData->profile_photo_path) 
                                        : url('upload/no_image.jpg') }}" alt="profile_preview" class="img-thumbnail shadow-sm" width="110">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3"></div>
                                        <div class="col-sm-9 text-secondary">
                                            <span class="btn btn-primary px-4" id="btn-edit">Sửa thông tin</span>
                                            <input type="submit" class="btn btn-primary px-4" style="display: none" id="btn-update" value="Update" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- Dynamic Edit Button -->
<script>
    $(document).ready(function() {
        $("#btn-edit").click(function() {
            $("#btn-edit").hide();
            $("#btn-update").show();
            $(".form-control").removeAttr('disabled');
        });
    });
</script>

<!-- Show Image Ajax -->
<script>
    $(document).ready(function() {
        $('#image').change(function(e) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#showImage').attr('src', e.target.result);
            }
            reader.readAsDataURL(e.target.files['0']);
        });
    });
</script>
@endsection