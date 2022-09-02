<template>
    <div class="movies">
        <div class="pinnedHeader">
            <div class="header">
                <div class="mainHeader">
                    <img src="../assets/images/logo-netflix.png" alt="" srcset="" class="logo" />
                    <ul class="mainHeader-ul">
                        <li class="mainHeader-li">
                            <a href="">Home</a>
                            <a href="">TV Shows</a>
                            <a href="">Movies</a>
                            <a href="">New & Popular</a>
                            <a href="">My List</a>
                            <a href="">Browse by Languages</a>
                        </li>
                    </ul>
                </div>
                <div class="secondaryHeader">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="search-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                            fill="currentColor"></path>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="Hawkins-Icon Hawkins-Icon-Standard">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                            fill="currentColor"></path>
                    </svg>
                    <img class="profile-icon"
                        src="https://occ-0-6571-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXeeIVtmgzU089rwEnRNnxk6Q1GHEkPghoK2PHnziJv4WrrO_QxZ4crVPJIe3wjusYZjCmN1sxolKdCbQ1jli_HtH2hAzsU.png?r=fcd"
                        alt="" />
                </div>
            </div>
        </div>
        <div class="mainView">
            <div class="billboard">
                <img src="../assets/images/blacksummerbackground.webp" alt="" srcset="" class="background">
                <div class="info-wrapper">
                    <img src="../assets/images/blacksummer.webp" alt="" srcset="" class="n-series-img">
                    <div class="info-wrapper-text">
                        In the dark, early days of a zombie apocalypse, complete strangers band together to find the
                        strength they need to survive and get back to loved ones.
                    </div>
                    <div class="info-wrapper-buttons">
                        <button class="play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                <path
                                    d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                    fill="currentColor"></path>
                            </svg>
                            Play
                        </button>
                        <button class="more-info-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                    fill="currentColor"></path>
                            </svg>
                            More info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/* Styling goes from top item to bottom in that order */

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    z-index: 1;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .8) 10%, transparent);
    position: fixed;
    width: 100%;
}

.mainHeader-li {
    list-style-type: none;
    display: flex;
    gap: 20px;
}

.mainHeader-li a {
    font-weight: 400;
    font-size: 0.6vw;
    font-family: "Poppins", sans-serif;
}

.mainHeader {
    display: flex;
    align-items: center;
}

.secondaryHeader {
    display: flex;
    align-items: center;
    gap: 20px;
}

.logo {
    width: 92.5px;
    height: 31px;
}

.background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
}

.n-series-img {
    width: 100%;
}

.info-wrapper {
    position: absolute;
    top: 35%;
    left: 60px;
    width: 36%;
    z-index: 10;
}

.info-wrapper-text {
    color: #fff;
    font-size: 1vw;
    font-weight: 400;
    line-height: normal;
    margin-top: 0.1vw;
    text-shadow: 2px 2px 4pxrgba(0, 0, 0, .45);
    width: 100%;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 15px;
}

.info-wrapper-buttons {
    display: flex;
    gap: 10px;
}

.play-button {
    width: 5.5vw;
    height: 4vh;
    border: 0;
    font-size: 0.9vw;
    background-color: white;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

.more-info-button {
    width: 7.5vw;
    height: 4vh;
    border: 0;
    font-size: 0.9vw;
    background-color: rgba(109, 109, 110, 0.7);
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: white;
}

.play-button,
.more-info-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

</style>
