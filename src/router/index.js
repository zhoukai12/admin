const router = [
    {
        title: '首页',
        icon: 'home',
        key: '/home'
    },
    {
        title: '类目管理',
        icon: 'home',
        key: '/home/category',
        children: [
            {
                title: '类目列表',
                icon: 'home',
                key: '/home/category/category'
            },
            {
                title: '子页2',
                icon: 'home',
                key: '/home/category/index2'
            },
        ]
    },
]
export default router;