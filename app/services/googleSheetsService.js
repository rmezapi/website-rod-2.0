import fetch from 'node-fetch';

const CS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRkSlUj3CIi9ZG-QfchNtvCqUpENkVn-iz90gFZ-HJAXdi6eHwqZuh41mLvVX72cdVb6X-PKycYVO1e/pub?gid=0&single=true&output=csv';

// digital photo sheet urls
const DIGITAL_CLIMBING_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS30uq14M4zoSvChXaaYimMW9U-XdXj87uX_0H1xKOqrAZEshEZZs0MLB7IsUzOsX_HB1oDS_RT1zqZ/pub?gid=0&single=true&output=csv'
const DIGITAL_BIKING_ADV_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxW_NyTf9cmJ37kfgkk6E4vDT5mqgKNrfux65gWI7wpqtUuG9VD3USt9aZQY_qjQzCZSzC4zMxi-ea/pub?gid=0&single=true&output=csv'
const GRAD_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTymNQc2Yr9GYxMaEie6uHWG6NnFhEvTlcV42iq2rRZbLHrupmyMMgLoXGhsY2YzVGDYTC1Ue2cRMsg/pub?gid=0&single=true&output=csv'
const THE_TOWN_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDPy0d0p2-PvR1Pu2RCfEAS3tt_fMr8iJLQOS74pvB6k2VSukyD67afz7dNVrmbNmmgBhrlvx-DLaV/pub?gid=0&single=true&output=csv'
const KT_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJAmCrHEDT6MyV__0ulK2SrITIBVAnd1FxRBrpUn5OrpX13FAPJCFyT6EKCMbOco83eNBCki4vacnj/pub?gid=0&single=true&output=csv'
const FRIENDS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vST5hnMVFwjzmU7DToFWq8GnD85wCcOi4mxOXBpe_KZEl7Tr-hb_lmU66E-Z50PWCxn4KX8DLS932t1/pub?gid=0&single=true&output=csv'
const SCUBA_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJTPR28ZkKCQkAvch5ORh2aB8p7nsgTGlVvWaRAMC6Sl2IoaaFkdxPzoAr2Nq2UmhtHZ9g3bgMbzmb/pub?gid=0&single=true&output=csv'
const NIGHT_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQvUaFqr5CKGqP_kD0V1UqYoWrqCMjw-Dv01M1r7PvYzu2pjnKFmsPFofWVIFb7iGgXQQSxO-IVibl/pub?gid=0&single=true&output=csv'
const YVTP_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnKye1KJwspU_bbE6FH2YuSF7LQYJKxbpViDfTxT0XYEiyK_mi6dWjxfLYNiZcwHkHlx7DJCOmBMm2/pub?gid=0&single=true&output=csv'

// film project sheet urls
const FILM_ROAD_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQh8BqZp3IJcwTyEttw0FOCAouCpm43nE-hmC7UcZay7nMfCVfndG96YHvBfDJ0gB1HynwN-IU2GpSS/pub?gid=0&single=true&output=csv'
const FILM_MTB_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4QLZkjtoi_8q5TqPr28IStOq48gLrgWHuV2vRaITloD9oBQcA_Av_66VJsakaA8Z9iUvrzRqCV435/pub?gid=0&single=true&output=csv'
const FILM_BOULDERING_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRlom03bx-mTW6ct4vFIJnfRDiRbtLlDSmSMj156dAexJuufNkIEzGy228t-bCHonbYbtGbGrrmqYY4/pub?gid=0&single=true&output=csv'
const FILM_CLIMBING_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3H51QyLSqUdwNfpWoALNw_8LikbfvR0HQpC85wGTX_L5bwE5TBZvsdnbBEjvYIP0gYEpUHbRz7uxJ/pub?gid=0&single=true&output=csv'
const FILM_BW_CLIMBING_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0zH6RKPVw1MtMbQpZsTFeo0LG4XiVgZ2IF3REA0eRW2QdtGyX5vCgaD70Wilnjk5jpJHSV-8-zrXX/pub?gid=0&single=true&output=csv'
const FILM_ST_SIMON_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vToLkbZRozOqy0MeQ9us3oPLWSi6FQEz2p9SfmKs-6fuXTotxM0u-NvyNzkFQwc0Pzeb_f8iSyCFdZo/pub?gid=0&single=true&output=csv'
const FILM_FRIENDS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBsRrAc62HE8ZgeG6JI_iI2jF_75QIwmRSSKCcXOMHjVzEY2rtm1-wAclw5nfScpugjqiP90nKAU_R/pub?gid=0&single=true&output=csv'
const FILM_SF_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRESf2sZQjR2jGpfKhzdKlBfOxU3l64pKyC81FHaWPc9dUIgCuBXQ67qCVDP7nGz7qL_9q8L9ldYj94/pub?gid=0&single=true&output=csv'
const FILM_BIKING_ADV_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDmDrSln6a1a8JP9QFa8XYqKtZJvw98EGrv8sGWn03FUU8jY9V3c4VfQywF1evjKbDKFhM7X0QymrX/pub?gid=0&single=true&output=csv'



export async function fetchProjects() {
    try {
        console.log('Starting to fetch projects from Google Sheets...');
        const response = await fetch(CS_SHEET_URL);
        console.log('Received response from Google Sheets.');

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvData = await response.text();
        console.log('Successfully fetched and converted response to text.');

        return csvData;
    } catch (error) {
        console.error('Error fetching the CSV:', error);
        throw error;
    }
}

export async function fetchPhotos(link) {
    try {
        console.log('Starting to fetch photos from Google Sheets...');
        const response = await fetch(link);
        console.log('Received response from Google Sheets.');

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvData = await response.text();
        console.log('Successfully fetched and converted response to text.');

        return csvData;
    } catch (error) {
        console.error('Error fetching the CSV:', error);
        throw error;
    }
}