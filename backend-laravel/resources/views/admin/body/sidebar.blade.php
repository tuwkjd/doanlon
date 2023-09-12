<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <div>
            <img src=" {{ asset('backend/assets/images/download.png') }}" class="logo-icon" alt="logo icon">
        </div>
        <div>
            
        </div>
        <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
        </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
        <li>
            <a href="{{ route('dashboard') }}">
                <div class="parent-icon"><i class='bx bx-home-circle'></i>
                </div>
                <div class="menu-title">Trang chủ</div>
            </a>
        </li>
        <li class="menu-label">Quản lý</li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon"><i class='bx bx-grid-alt'></i>
                </div>
                <div class="menu-title">Danh mục</div>
            </a>
            <ul>
                <li> <a href="{{ route('all.category') }}"><i class="bx bx-right-arrow-alt"></i>Tất cả danh mục</a>
                </li>
                <li> <a href="{{ route('add.category') }}"><i class="bx bx-right-arrow-alt"></i>Thêm danh mục</a>
                </li>
            </ul>
        </li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class='bx bx-server'></i>
                </div>
                <div class="menu-title">Danh mục phụ</div>
            </a>
            <ul>
                <li> <a href="{{ route('all.subcategory') }}"><i class="bx bx-right-arrow-alt"></i>Tất cả danh mục phụ</a>
                </li>
                <li> <a href="{{ route('add.subcategory') }}"><i class="bx bx-right-arrow-alt"></i>Thêm danh mục phụ</a>
                </li>
            </ul>
        </li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class="bx bx-dock-top"></i>
                </div>
                <div class="menu-title">Mẫu</div>
            </a>
            <ul>
                <li> <a href="{{ route('all.slider') }}"><i class="bx bx-right-arrow-alt"></i>Tất cả các mẫu</a>
                </li>
                <li> <a href="{{ route('add.slider') }}"><i class="bx bx-right-arrow-alt"></i>Thêm mẫu</a>
                </li>
            </ul>
        </li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class="bx bx-cart"></i>
                </div>
                <div class="menu-title">Sản phẩm</div>
            </a>
            <ul>
                <li> <a href="{{ route('all.product') }}"><i class="bx bx-right-arrow-alt"></i>Tất cả sản phẩm </a>
                </li>
                <li> <a href="{{ route('add.product') }}"><i class="bx bx-right-arrow-alt"></i>Thêm sản phẩm</a>
                </li>
            </ul>
        </li>

        <li>
            <a href="{{ route('contact.message') }}">
                <div class="parent-icon"><i class="bx bx-message"></i>
                </div>
                <div class="menu-title">Chat với chúng tôi</div>
            </a>
        </li>

        <li>
            <a href="{{ route('all.review') }}">
                <div class="parent-icon"><i class="bx bx-news"></i>
                </div>
                <div class="menu-title">Review sản phẩm</div>
            </a>
        </li>

        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"> <i class="bx bx-info-circle"></i>
                </div>
                <div class="menu-title">Thông tin</div>
            </a>
            <ul>
                <li> <a href="{{ route('all.siteinfo') }}"><i class="bx bx-right-arrow-alt"></i>Cập nhật</a>
                </li>
            </ul>
        </li>


        <li class="menu-label">Đơn đặt hàng</li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class='bx bx-cart-alt'></i>
                </div>
                <div class="menu-title">Quản lý đặt hàng</div>
            </a>
            <ul>
                <li> <a href="{{ route('pending.order') }}"><i class="bx bx-right-arrow-alt"></i>Đơn đặt hàng</a>
                </li>
                <li> <a href="{{ route('processing.order') }}"><i class="bx bx-right-arrow-alt"></i>Dơn đặt đã xác nhận</a>
                </li>
                <li> <a href="{{ route('completed.order') }}"><i class="bx bx-right-arrow-alt"></i>Đơn hàng đã hoàn thành</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="https://w3schools.com" target="_blank">
                <div class="parent-icon"><i class="bx bx-support"></i>
                </div>
                <div class="menu-title">Hỗ trợ</div>
            </a>
        </li>
    </ul>
    <!--end navigation-->
</div>