import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Cưới Luôn Được Không? (Goctoi Remix)',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/9/b/0/19b0b97e4b55a6918db7c61e37b59519.jpg',
            singer: ' YuniBoo, ',
        },
        {
            id: 2,
            name: 'Lover Like Me (Single) - CL',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/9/9/2/79928b771d7f4083456eabfe7900d28c.jpg',
            singer: 'CL',
        },
        {
            id: 3,
            name: 'Tình Yêu Chân Thành (Single) - Trương Thảo Nhi',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/c/a/4/aca46a2c9c9a31d551122261e279921c.jpg',
            singer: 'Trương Thảo Nhi',
        },
        {
            id: 4,
            name: 'Cậu Trai Đứng Hát Một Mình (Single) - Phạm Nguyên Ngọc, B.',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/9/4/1/c94138d58f0565224329c5269ea850d5.jpg',
            singer: ' Phạm Nguyên Ngọc, ',
        },
    ];
    return (
        <div>
            <h2>Album hot</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;