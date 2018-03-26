/*菜单配置js*/

const MenuConfig = [
  // {
  //   level: 0,
  //   name: "System Management",
  //   index: 1,
  //   role: "SM",
  //   path: 'home',
  //   icon: "home",
  //   children: [
  //     {
  //       level: 1,
  //       name: "pepple management",
  //       path: '/uplending/home',
  //       index: 1,
  //       role: "loan audit",
  //     },
  //     {
  //       level: 1,
  //       name: "auth role management",
  //       path: 'sm-arma',
  //       index: 2,
  //       role: "auth role management",
  //     },
  //     {
  //       level: 1,
  //       name: "resources management",
  //       path: 'sm-rema',
  //       index: 3,
  //       role: "resources management",
  //     },
  //     {
  //       level: 1,
  //       name: "password modify",
  //       path: 'sm-pamo,',
  //       index: 4,
  //       role: "password modify",
  //     },
  //   ]
  // },
  {
    level: 0,
    name: "Operation Management",
    index: 2,
    role: "OM",
    path: 'home',
    icon: "home",
    children: [
      {
        level: 1,
        name: "loan audit",
        path: '/uplending/loanaudit',
        index: 1,
        role: "loan audit",
      },
      {
        level: 1,
        name: "post loan",
        path: 'om-polo',
        index: 2,
        role: "post loan",
      },
      {
        level: 1,
        name: "风控策略",
        path: 'om-fc',
        index: 3,
        role: "风控策略",
      },
      {
        level: 1,
        name: "运营",
        path: 'om-yy',
        index: 4,
        role: "运营",
      },
      {
        level: 1,
        name: "会员",
        path: 'om-hy',
        index: 5,
        role: "会员",
      },
      {
        level: 1,
        name: "funds management",
        path: 'om-fuma,',
        index: 6,
        role: "funds management",
      },
      {
        level: 1,
        name: "feedback",
        path: 'om-fb,',
        index: 6,
        role: "feedback",
      },
      {
        level: 1,
        name: "credit collectioon",
        path: '/uplending/faqs',
        index: 7,
        role: "redit collection",
      },
      {
        level: 1,
        name: "Revaluation",
        path: '/uplending/aboutus',
        index: 8,
        role: "Revaluation",
      },
      {
        level: 1,
        name: "InputOrder",
        path: '/uplending/inputorder',
        index: 9,
        role: "InputOrder",
      },
    ]
  }
]

export default MenuConfig;