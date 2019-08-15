export default {
    data() {
        return {
            form: {
                username:   '',
                searchType: 'username',
            },
            tableData: {
                head: [{
                    date: '日期',
                }, {
                    name: '名字',
                }, {
                    address: '地址',
                }],
                data: [{
                    date:    '2016-05-01',
                    name:    '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date:    '2016-05-02',
                    name:    '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                }, {
                    date:    '2016-05-03',
                    name:    '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                }, {
                    date:    '2016-05-04',
                    name:    '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                }, {
                    date:    '2016-05-05',
                    name:    '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                }, {
                    date:    '2016-05-06',
                    name:    '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                }, {
                    date:    '2016-05-07',
                    name:    '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                }],
                paging: {
                    total:     100,
                    pageSize:  10,
                    pageIndex: 1,
                },
            },
        };
    },
    methods: {

    },
};
