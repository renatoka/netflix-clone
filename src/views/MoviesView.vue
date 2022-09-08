<template>
    <div class="movies">
        <div class="pinnedHeader">
            <div class="header">
                <div class="mainHeader">
                    <RouterLink to="/"><img src="../assets/images/logo-netflix.png" alt="Netflix Logo" id="logo" />
                    </RouterLink>
                    <ul class="mainHeader-ul">
                        <li class="mainHeader-li">
                            <a href="#">Home</a>
                            <a href="#">TV Shows</a>
                            <a href="#">Movies</a>
                            <a href="#">New & Popular</a>
                            <a href="#">My List</a>
                            <a href="#">Browse by Languages</a>
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
                <img :src="selectedImage" alt="" srcset="" class="background">
                <div class="info-wrapper">
                    <img :src="this.coverImg" alt="" srcset="" class="n-series-img">
                    <div class="info-wrapper-text">
                        {{ this.text }}
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
            <div class="slider-content">
                <div class="slider-container">
                    <div class="slider-item">
                        <h1 class="slider-heading">Bingeworty Suspenseful TV Shows</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/bingeworthy/1.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/2.webp" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/3.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/4.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/5.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/7.jpg" alt="" srcset=""
                                class="slider-image">
                        </div>
                    </div>
                    <div class="slider-item">
                        <h1 class="slider-heading">Trending</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/trending/1.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/2.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/3.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/4.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/5.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/6.jpg" alt="" srcset=""
                                class="slider-image">
                        </div>
                    </div>
                    <div class="slider-item">
                        <h1 class="slider-heading">Documentaries</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/docu/1.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/2.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/3.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/4.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/5.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/6.jpg" alt="" srcset="" class="slider-image">
                        </div>
                    </div>
                    <div class="slider-item">
                        <h1 class="slider-heading">Bingeworty Suspenseful TV Shows</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/bingeworthy/1.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/2.webp" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/3.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/4.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/5.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/7.jpg" alt="" srcset=""
                                class="slider-image">
                        </div>
                    </div>
                    <div class="slider-item">
                        <h1 class="slider-heading">Trending</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/trending/1.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/2.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/3.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/4.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/5.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/6.jpg" alt="" srcset=""
                                class="slider-image">
                        </div>
                    </div>
                    <div class="slider-item">
                        <h1 class="slider-heading">Documentaries</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/docu/1.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/2.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/3.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/4.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/5.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/6.jpg" alt="" srcset="" class="slider-image">
                        </div>
                    </div>
                    <div class="slider-item">
                        <h1 class="slider-heading">Bingeworty Suspenseful TV Shows</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/bingeworthy/1.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/2.webp" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/3.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/4.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/5.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/bingeworthy/7.jpg" alt="" srcset=""
                                class="slider-image">
                        </div>
                    </div>
                    <div class="slider-item">
                        <h1 class="slider-heading">Trending</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/trending/1.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/2.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/3.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/4.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/5.jpg" alt="" srcset=""
                                class="slider-image">
                            <img src="../assets/images/movie-icons/trending/6.jpg" alt="" srcset=""
                                class="slider-image">
                        </div>
                    </div>
                    <div class="slider-item">
                        <h1 class="slider-heading">Documentaries</h1>
                        <div class="slider-images">
                            <img src="../assets/images/movie-icons/docu/1.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/2.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/3.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/4.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/5.jpg" alt="" srcset="" class="slider-image">
                            <img src="../assets/images/movie-icons/docu/6.jpg" alt="" srcset="" class="slider-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            /* Billboard images */
            images: ['https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABccducOFW4mcVGDxH5SLzLekOwmgaHfaqvekXucEoU6r6AH4Kj0XtbVgxqQcmqiHvqkhWPiHPP44P4N2WOOVmQhjWGvUFdQcl8aI.webp?r=853',
                'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWqwcrQXuSBtatzlLN4xULiNdr6WswK6T0t8rvH0s8nJNqCjN9EZIOmsJv0pqhJa6XxxRHnvQAaJuvw5vvqFP11DcvRpH8ZXoJXm.webp?r=afe',
                'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWljal2-yUqjEfv4AxhQ4O6t6S3kejd8zsIbJ1CCWnCqfARB8WFi2B5LWBwYLRpOwY7NCUc38PnVlkkhFTG4ZuhwViVW77Fp6Zca.webp?r=e0c'],
            selectedImage: null,
            text: null,
            coverImg: null,
        }
    },
    methods: {
        randomItem(items) {
            return items[Math.floor(Math.random() * items.length)];
        }
    },
    created() {
        /* Very beginner friendly way of displaying billboard images.
        Will update once I learn more and how to do so. */
        this.selectedImage = this.randomItem(this.images);
        if (this.selectedImage == 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABccducOFW4mcVGDxH5SLzLekOwmgaHfaqvekXucEoU6r6AH4Kj0XtbVgxqQcmqiHvqkhWPiHPP44P4N2WOOVmQhjWGvUFdQcl8aI.webp?r=853') {
            this.text = 'In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.',
                this.coverImg = 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABV5GmYeqjqlr49rSPZyok2MlnG7k-L1BLumk9b9tqWGZLp3qAIcve97viX_SRHMWGHXrAemVtpHq8JDXTfNtkf-wGrk-5teNvyMeKMoQgLUBv9U6kQou3IOgQaRgIdnr1YyXgIRpOwwNqfNCGoj7nBdcJtuJ6RbyDMcffvdt9pAgSD_Q9KAk1Q.webp?r=373'
        }
        else if (this.selectedImage == 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWqwcrQXuSBtatzlLN4xULiNdr6WswK6T0t8rvH0s8nJNqCjN9EZIOmsJv0pqhJa6XxxRHnvQAaJuvw5vvqFP11DcvRpH8ZXoJXm.webp?r=afe') {
            this.text = 'Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignites in this sequel to the "Karate Kid" films.'
            this.coverImg = 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/0jxQXg4biAHes0_WdLiCw28fDpg/AAAABWO8u8n-u2Bg1KRfTMEUzyk19J6mvat3_xyQxGqr16jhg7LVDr_I5V2kjRkLOBlX6lci7y_8-dLsJEyO2DzpMyeQ49GmJVI0dvbHsZJVyuLKh2qIKgP4VacSMTFL8slBitT2u5Xj5cWrUAcJshP2pivx3mXdVEZvODtfNMTPg4Cpk7Hk-vNKPOuGUn1MWMSN0nq16jwkZPheTrziKlbudPPRwAxn97gZnD00Nl80yazG_KG-BE2OWjdxwI673Kf-uxZx-0P8g3o4UPmYJwWJsOW2s8zn3pmW5WEj4wI3_qBFb6WZOKB0p4CMTfx9nqtw_2fowF0582SfZCKiBBWb7fm9Yk2nabuheFWJpKzRdaGuZ-RpYoLba0w-QzqpMYBexhm_3Gq_-iwNVJ7z-sZc6-fA_kxFidJYItMJfR8.webp?r=63f'
        }
        else if (this.selectedImage == 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWljal2-yUqjEfv4AxhQ4O6t6S3kejd8zsIbJ1CCWnCqfARB8WFi2B5LWBwYLRpOwY7NCUc38PnVlkkhFTG4ZuhwViVW77Fp6Zca.webp?r=e0c') {
            this.text = 'A forensics expert who wakes from a coma with amazing new powers squares off against forces threatening the city in this live-action superhero romp.'
            this.coverImg = 'https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbU1ZOR7A3G4OHkAwbYzfYR9BWB4n9lcQjWeqZSv6YwXyZ6okVmkVVGilIhuUSGov_ZcnG2Rt4BDoZCJE3voe0Kvh49Pt7g-8o6r2tUWvPi9.webp?r=604'
        }
    }
}

</script>

<style scoped>
/* Styling goes from top item to bottom in that order */

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    margin: 0;
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
    font-size: 0.8vw;
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

/* Main content */

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
    width: 30vw;
    z-index: 1;
}

.info-wrapper-text {
    color: #fff;
    font-size: 1vw;
    font-weight: 400;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .45);
    margin-bottom: 15px;
}

.info-wrapper-buttons {
    display: flex;
    gap: 10px;
}

.play-button {
    width: 120px;
    height: 50px;
    border: 0;
    font-size: 16px;
    background-color: white;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

.more-info-button {
    width: 150px;
    height: 50px;
    border: 0;
    font-size: 16px;
    background-color: rgba(109, 109, 110, 0.7);
    border-radius: 5px;
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

.slider-content {
    padding: 20px 60px;
    position: relative;
    top: -200px;
}

.slider-item {
    overflow-x: hidden;
    margin: 2vw 0;
}

.slider-images {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1vw;
}

.slider-image {
    width: 15vw;
}

.slider-heading {
    font-size: 1.3vw;
    color: white;
    font-weight: 600;
}

@media only screen and (min-width: 886px) and (max-width:1300px) {
    .info-wrapper {
        top: 20%;
    }

    .slider-image {
        width: 230px;
    }

    .slider-heading {
        font-size: 18px;
    }

    .play-button, .more-info-button {
        width: 120px;
        height: 50px;
    }
}

@media only screen and (min-width: 350px) and (max-width: 885px) {

    svg {
        width: 14px;
        height: auto;
    }

    #logo {
        width: 46px;
        height: auto;
    }

    .header {
        padding: 20px;
    }
    .search-icon {
        display: none;
    }

    .mainHeader-ul {
        padding-left: 10px;
    }

    .mainHeader-li a {
        font-weight: 400;
        font-size: 0.5rem;
    }

    .mainHeader-li>a:not(:first-child) {
        display: none;
    }

    .info-wrapper {
        position: absolute;
        top: 20%;
        left: 20px;
    }

    .play-button,
    .more-info-button {
        height: 30px;
        font-size: 8px;
    }

    .slider-content {
        padding: 0 20px;
        position: relative;
        top: -50px;
    }

    .slider-image {
        width: 180px;
    }

    .slider-heading {
        font-size: 15px;
    }
}
</style>
