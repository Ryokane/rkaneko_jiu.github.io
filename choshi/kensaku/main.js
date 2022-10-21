const userDataList = [
    { id: 1, name: '銚子一' },
    { id: 2, name: '銚子二' },
    { id: 3, name: '銚子' },
    { id: 4, name: '銚子五'},
    { id: 5, name: '旭二'},
    { id: 6, name: '海上'},
    { id: 7, name: '小見川'},
    { id: 8, name: '四街道'},
    { id: 9, name: '松戸常盤平A'},
    { id: 10, name: '松戸常盤平B'},
    { id: 11, name: '松戸六実'},
    { id: 12, name: '松戸古ヶ崎'},
    { id: 13, name: '松戸新松戸南'},
    { id: 14, name: '野田二A'},
    { id: 15, name: '野田二B'},
    { id: 16, name: '野田南部中A'},
    { id: 17, name: '野田南部中B'},
    { id: 18, name: '野田北部'},
    { id: 19, name: '野田岩名'},
    { id: 20, name: '野田二川'},
    { id: 21, name: '流山南流山A'},
    { id: 22, name: '流山南流山B'},
    { id: 23, name: '流山西初石A'},
    { id: 24, name: '流山西初石B'},
    { id: 25, name: '我孫子A'},
    { id: 26, name: '我孫子B'},
    { id: 27, name: '我孫子湖北'},
    { id: 28, name: '我孫子布佐'},
    { id: 29, name: '我孫子湖北台A'},
    { id: 30, name: '我孫子湖北台B' },
    { id: 31, name: '我孫子白山' },
    { id: 32, name: '鎌ヶ谷二' },
    { id: 33, name: '鎌ヶ谷三A' },
    { id: 34, name: '鎌ヶ谷三B' },
    { id: 35, name: '鎌ヶ谷五A' },
    { id: 36, name: '鎌ヶ谷五B' },
    { id: 61, name: '銚子一' },
    { id: 62, name: '銚子' },
    { id: 63, name: '銚子五' },
    { id: 64, name: '小見川' },
    { id: 65, name: '四街道' },
    { id: 66, name: '松戸常盤平' },
    { id: 67, name: '野田二A' },
    { id: 68, name: '野田二B' },
    { id: 69, name: '野田北部' },
    { id: 70, name: '流山南流山' },
    { id: 71, name: '我孫子' },
    { id: 72, name: '我孫子湖北' },
    { id: 73, name: '我孫子白山' },
    { id: 74, name: '鎌ヶ谷二' },
    { id: 75, name: '鎌ヶ谷二・三合同' },
];

//1位
const searchIdInput = document.querySelector('#search-id-input');

const searchResult = document.querySelector('#search-result');

searchIdInput.addEventListener('keyup', () => {
    const searchId = Number(event.target.value);
    findUser(searchId);
});

function findUser(searchId){
    const targetData = userDataList.find((data) => data.id === searchId);

    if (targetData == null) {
        searchResult.textContent = '該当校がありません。1〜36は男子、61〜75は女子です。';
        return;
    }

    searchResult.textContent = targetData.name;
}

