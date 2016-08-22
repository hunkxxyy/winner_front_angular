"use strict";
exports.OPERATIONMENU = {
    visible: false,
    submenus: [
        {
            name: 'Kijelöltek archiválása',
            link: 'archive'
        }
    ]
};
exports.ORDERBYMENU = {
    visible: false,
    submenus: [
        {
            orderBy: {
                name: 'Dátum',
                alias: 'datum'
            }
        },
        {
            orderBy: {
                name: 'Utoljára módosítva',
                alias: 'updated_at'
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