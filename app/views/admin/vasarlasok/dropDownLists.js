"use strict";
exports.ORDERBYMENU = {
    visible: false,
    submenus: [
        {
            orderBy: {
                name: 'Mind',
                alias: '*'
            }
        },
        {
            orderBy: {
                name: 'Csak megrendelt',
                alias: 'fuggo'
            }
        },
        {
            orderBy: {
                name: 'Csak átutalt',
                alias: 'fizetett'
            }
        }
    ]
};
exports.LIMITMENU = {
    visible: false,
    submenus: [
        {
            name: '5'
        },
        {
            name: '10'
        },
        {
            name: '25'
        },
        {
            name: '50'
        },
        {
            name: '150'
        }
    ]
};
//# sourceMappingURL=dropDownLists.js.map