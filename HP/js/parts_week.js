'use strict'; 
{
    const $header_parys = document.getElementById('header_parts');
    $header_parys.insertAdjacentHTML('afterbegin' , `
    <header id="header">
    <div class="header_menu flex_header">
        <a href="./index.html"><img id="header_img" src="../images/junk_icon.png"><p id="name_header">Girl's JUNK</p></a>
    </div>

    <div id="position">
        <h1>出勤予定</h1>
    </div>

    <!-- ハンバーガーメニュー部分 -->
    <div class="nav">

        <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
        <input id="drawer_input" class="drawer_hidden" type="checkbox">
    
        <!-- ハンバーガーアイコン -->
        <label for="drawer_input" id="drawer_open" class="drawer_open"><span></span></label>
    
        <!-- メニュー -->
        <nav id="nav_content" class="nav_content">
        <ul class="nav_list">
            <li class="nav_item"><a href="./plofiel.html">スタッフプロフィール</a></li>
            <li class="nav_item"><a href="./week.html">今週の出勤メンバー</a></li>
            <li class="nav_item"><a href="./event.html">イベント情報</a></li>
            <li class="nav_item"><a href="./access.html">予約・問い合わせ</a></li>
            </ul>
        </nav>
    </div>

</header>
`)};

{
    const $footer_parys = document.getElementById('footer_parts');
    $footer_parys.insertAdjacentHTML('afterbegin' , `

    <footer>
    <div class="footer_home">
        <a href="./index.html">Girl's JUNK</a>
    </div>    

    <div class="footer_info">
        <div class="footer_adress">    
            <p>青森県八戸市一番町1丁目8-22<br><br>
                <a href="tell:0178209832">☎ 0178-20-9832</a>
            </p> 
        </div>

        <div class="footer_links">
            <div class="footer_sns">
                <a class="instagram" href="https://www.instagram.com/junk_hachinohe_aomori/"><span class="f-fa fa-brands fa-instagram"></span></a>
                <a class="line" href="https://lin.ee/rbLo70R"><span class="f-fa fa-brands fa-line"></span></a>    
            </div>    
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24268.231355841406!2d141.42805543981174!3d40.50779895735214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b4e70456ea913%3A0x269bf272cb94a2bc!2sGirl&#39;s%20JUNK!5e0!3m2!1sja!2sjp!4v1681177135947!5m2!1sja!2sjp"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>


    
    <div class="copy">
        <p>Copyright<small>&copy;</small>2023 / Girl's JUNK / All Rights Reserved.</p>
    </div>
</footer>
`)};