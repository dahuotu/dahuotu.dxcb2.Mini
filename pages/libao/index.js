// pages/giftbag/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ckid: 0,
    list: [
      {
        "id": 244,
        "name": "盗梦空间",
        "remark": "宝石*99",
        "state": 1
      },
      {
        "id": 243,
        "name": "地堡不朽",
        "remark": "黑暗水晶*1 宝石*50",
        "state": 1
      },
      {
        "id": 127,
        "name": "金猪在手衰狗快走",
        "remark": "秘银补给*1",
        "state": 2
      },
      {
        "id": 129,
        "name": "噼里啪啦稀里哗啦",
        "remark": "水晶补给*3",
        "state": 2
      },
      {
        "id": 137,
        "name": "我在地堡挖古董",
        "remark": "宝石*20 食物补给*18 金币*200 木材补给*8",
        "state": 2
      },
      {
        "id": 224,
        "name": "遗迹远征",
        "remark": "金币*800 宝石*100 秘银补给*4",
        "state": 2
      },
      {
        "id": 225,
        "name": "黑暗觉醒",
        "remark": "金币*500 宝石*20 木材补给*2 食物补给*5",
        "state": 2
      },
      {
        "id": 226,
        "name": "外挂零容忍",
        "remark": "宝石*100",
        "state": 2
      },
      {
        "id": 227,
        "name": "87648小时",
        "remark": "宝石*50",
        "state": 2
      },
      {
        "id": 228,
        "name": "强者碎片",
        "remark": "食物补给*15",
        "state": 2
      },
      {
        "id": 229,
        "name": "支气管炎",
        "remark": "食物补给*15",
        "state": 2
      },
      {
        "id": 230,
        "name": "TapTap",
        "remark": "宝石*100",
        "state": 2
      },
      {
        "id": 231,
        "name": "猜猜它是谁",
        "remark": "金币*2333 宝石*50",
        "state": 2
      },
      {
        "id": 232,
        "name": "明早去搬砖假装爱上班",
        "remark": "宝石*30",
        "state": 2
      },
      {
        "id": 233,
        "name": "黑潮由我来拯救",
        "remark": "黑暗水晶*1",
        "state": 2
      },
      {
        "id": 234,
        "name": "重建庇护所",
        "remark": "宝石*100 大型木材补给*2",
        "state": 2
      },
      {
        "id": 235,
        "name": "我需要物资",
        "remark": "食物补给*15",
        "state": 2
      },
      {
        "id": 242,
        "name": "我需要财富",
        "remark": "金币*500",
        "state": 2
      },
      {
        "id": 1,
        "name": "夏一可美少女",
        "remark": null,
        "state": 0
      },
      {
        "id": 2,
        "name": "王兰花秀丽",
        "remark": null,
        "state": 0
      },
      {
        "id": 3,
        "name": "高考辛苦啦",
        "remark": null,
        "state": 0
      },
      {
        "id": 4,
        "name": "红茶与白兰地",
        "remark": null,
        "state": 0
      },
      {
        "id": 5,
        "name": "波比丘",
        "remark": "食物*15000",
        "state": 0
      },
      {
        "id": 6,
        "name": "创世之书",
        "remark": "铁*5000",
        "state": 0
      },
      {
        "id": 7,
        "name": "罗严塔尔",
        "remark": "金币*500",
        "state": 0
      },
      {
        "id": 8,
        "name": "龙与地下城",
        "remark": "宝石*30",
        "state": 0
      },
      {
        "id": 9,
        "name": "洛夫克拉夫特",
        "remark": "食物*15000",
        "state": 0
      },
      {
        "id": 10,
        "name": "巴斯克维尔猎犬",
        "remark": "金币*500",
        "state": 0
      },
      {
        "id": 11,
        "name": "哈利波特",
        "remark": "秘银*1000",
        "state": 0
      },
      {
        "id": 12,
        "name": "哈比人",
        "remark": "水晶*3000",
        "state": 0
      },
      {
        "id": 13,
        "name": "所罗门",
        "remark": "水晶*3000",
        "state": 0
      },
      {
        "id": 14,
        "name": "博德之门",
        "remark": "木头*10000",
        "state": 0
      },
      {
        "id": 15,
        "name": "小汤姆里德尔",
        "remark": "乙太*5",
        "state": 0
      },
      {
        "id": 16,
        "name": "海德拉",
        "remark": "稀土*5",
        "state": 0
      },
      {
        "id": 17,
        "name": "命运女神",
        "remark": "木头*10000",
        "state": 0
      },
      {
        "id": 18,
        "name": "天神下凡",
        "remark": "秘银*1000",
        "state": 0
      },
      {
        "id": 19,
        "name": "天使与魔鬼",
        "remark": "稀土*5",
        "state": 0
      },
      {
        "id": 20,
        "name": "死海文书",
        "remark": "铁*6000",
        "state": 0
      },
      {
        "id": 21,
        "name": "巴尔",
        "remark": "宝石*30",
        "state": 0
      },
      {
        "id": 22,
        "name": "卡巴拉生命之树",
        "remark": "乙太*5",
        "state": 0
      },
      {
        "id": 23,
        "name": "罗拉娜之影",
        "remark": null,
        "state": 0
      },
      {
        "id": 24,
        "name": "我们开学啦",
        "remark": null,
        "state": 0
      },
      {
        "id": 25,
        "name": "love&peace",
        "remark": null,
        "state": 0
      },
      {
        "id": 26,
        "name": "椋笙许愿极品黑妹骑士",
        "remark": null,
        "state": 0
      },
      {
        "id": 27,
        "name": "尤格萨隆",
        "remark": null,
        "state": 0
      },
      {
        "id": 28,
        "name": "地下城堡安卓6群",
        "remark": null,
        "state": 0
      },
      {
        "id": 29,
        "name": "地狱十字军",
        "remark": null,
        "state": 0
      },
      {
        "id": 30,
        "name": "一群大咸鱼布里安",
        "remark": null,
        "state": 0
      },
      {
        "id": 31,
        "name": "国庆节快乐",
        "remark": "宝石*100",
        "state": 0
      },
      {
        "id": 32,
        "name": "远离王城",
        "remark": "S招募券*1",
        "state": 0
      },
      {
        "id": 33,
        "name": "但愿人长久千里共婵娟",
        "remark": null,
        "state": 0
      },
      {
        "id": 34,
        "name": "教授爱七海",
        "remark": null,
        "state": 0
      },
      {
        "id": 35,
        "name": "失落的极寒祭品",
        "remark": null,
        "state": 0
      },
      {
        "id": 36,
        "name": "三群Khepra",
        "remark": null,
        "state": 0
      },
      {
        "id": 37,
        "name": "人人爱教授",
        "remark": null,
        "state": 0
      },
      {
        "id": 38,
        "name": "kiss宝贝",
        "remark": null,
        "state": 0
      },
      {
        "id": 39,
        "name": "请给小黑妹点赞",
        "remark": null,
        "state": 0
      },
      {
        "id": 40,
        "name": "无力吐槽的兑换码",
        "remark": null,
        "state": 0
      },
      {
        "id": 41,
        "name": "萌新许愿lv",
        "remark": null,
        "state": 0
      },
      {
        "id": 42,
        "name": "木有礼包码",
        "remark": null,
        "state": 0
      },
      {
        "id": 43,
        "name": "你想不想要呀",
        "remark": null,
        "state": 0
      },
      {
        "id": 44,
        "name": "欢迎加入Bra军团",
        "remark": null,
        "state": 0
      },
      {
        "id": 45,
        "name": "凛冬将至",
        "remark": null,
        "state": 0
      },
      {
        "id": 46,
        "name": "不给糖就捣蛋",
        "remark": null,
        "state": 0
      },
      {
        "id": 47,
        "name": "Bra出征寸草不生",
        "remark": null,
        "state": 0
      },
      {
        "id": 48,
        "name": "青涩不及当初",
        "remark": null,
        "state": 0
      },
      {
        "id": 49,
        "name": "咸鱼来啊快活啊",
        "remark": null,
        "state": 0
      },
      {
        "id": 50,
        "name": "十一爱五群",
        "remark": null,
        "state": 0
      },
      {
        "id": 51,
        "name": "地堡二官方安卓1群",
        "remark": null,
        "state": 0
      },
      {
        "id": 52,
        "name": "一条咸鱼偶然路过",
        "remark": null,
        "state": 0
      },
      {
        "id": 53,
        "name": "bra最有钱的城主",
        "remark": null,
        "state": 0
      },
      {
        "id": 54,
        "name": "680082088",
        "remark": null,
        "state": 0
      },
      {
        "id": 55,
        "name": "地二官方安卓八群",
        "remark": null,
        "state": 0
      },
      {
        "id": 56,
        "name": "天国的我运气大于实力",
        "remark": null,
        "state": 0
      },
      {
        "id": 57,
        "name": "bra小猪",
        "remark": null,
        "state": 0
      },
      {
        "id": 58,
        "name": "落英",
        "remark": null,
        "state": 0
      },
      {
        "id": 59,
        "name": "圣诞快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 60,
        "name": "快乐的小猪",
        "remark": null,
        "state": 0
      },
      {
        "id": 61,
        "name": "听听楼下怎么看",
        "remark": null,
        "state": 0
      },
      {
        "id": 62,
        "name": "bra毅力帝",
        "remark": null,
        "state": 0
      },
      {
        "id": 63,
        "name": "bra逝去的青春",
        "remark": null,
        "state": 0
      },
      {
        "id": 64,
        "name": "我们都是数学家",
        "remark": null,
        "state": 0
      },
      {
        "id": 65,
        "name": "一直老年痴呆的河蟹",
        "remark": null,
        "state": 0
      },
      {
        "id": 66,
        "name": "skystars",
        "remark": null,
        "state": 0
      },
      {
        "id": 67,
        "name": "十字军永垂不朽",
        "remark": null,
        "state": 0
      },
      {
        "id": 68,
        "name": "最爱小姐姐",
        "remark": null,
        "state": 0
      },
      {
        "id": 69,
        "name": "期盼新春",
        "remark": null,
        "state": 0
      },
      {
        "id": 70,
        "name": "Water很水",
        "remark": null,
        "state": 0
      },
      {
        "id": 71,
        "name": "kiss宝贝第二弹",
        "remark": null,
        "state": 0
      },
      {
        "id": 72,
        "name": "加法",
        "remark": null,
        "state": 0
      },
      {
        "id": 73,
        "name": "kiss宝贝第三弹",
        "remark": null,
        "state": 0
      },
      {
        "id": 74,
        "name": "不想卡在裂隙",
        "remark": null,
        "state": 0
      },
      {
        "id": 75,
        "name": "地下城堡2吧",
        "remark": null,
        "state": 0
      },
      {
        "id": 76,
        "name": "惨痛回忆",
        "remark": null,
        "state": 0
      },
      {
        "id": 77,
        "name": "狗年大吉",
        "remark": null,
        "state": 0
      },
      {
        "id": 78,
        "name": "小黑妹拜年啦",
        "remark": null,
        "state": 0
      },
      {
        "id": 80,
        "name": "官方论坛加法大神",
        "remark": null,
        "state": 0
      },
      {
        "id": 81,
        "name": "平推尸王",
        "remark": null,
        "state": 0
      },
      {
        "id": 82,
        "name": "女王节快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 83,
        "name": "喜提城堡一周年",
        "remark": null,
        "state": 0
      },
      {
        "id": 84,
        "name": "周年庆典",
        "remark": null,
        "state": 0
      },
      {
        "id": 85,
        "name": "你蛮哥还是你蛮哥",
        "remark": null,
        "state": 0
      },
      {
        "id": 86,
        "name": "小黑妹我好想你",
        "remark": null,
        "state": 0
      },
      {
        "id": 87,
        "name": "我要进教会",
        "remark": null,
        "state": 0
      },
      {
        "id": 88,
        "name": "七夕快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 89,
        "name": "天黑请闭眼",
        "remark": null,
        "state": 0
      },
      {
        "id": 90,
        "name": "幸运56",
        "remark": null,
        "state": 0
      },
      {
        "id": 91,
        "name": "教师节快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 92,
        "name": "别一个人吃月饼",
        "remark": null,
        "state": 0
      },
      {
        "id": 93,
        "name": "中秋不孤单",
        "remark": null,
        "state": 0
      },
      {
        "id": 94,
        "name": "国庆七天乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 95,
        "name": "52裂隙不放弃",
        "remark": null,
        "state": 0
      },
      {
        "id": 96,
        "name": "官宣加油",
        "remark": null,
        "state": 0
      },
      {
        "id": 97,
        "name": "创造地下城",
        "remark": null,
        "state": 0
      },
      {
        "id": 98,
        "name": "11月对我好点",
        "remark": null,
        "state": 0
      },
      {
        "id": 99,
        "name": "渡劫成功",
        "remark": null,
        "state": 0
      },
      {
        "id": 100,
        "name": "继续加油鸭",
        "remark": null,
        "state": 0
      },
      {
        "id": 101,
        "name": "我的肝呢",
        "remark": null,
        "state": 0
      },
      {
        "id": 102,
        "name": "吉洛是只赖皮狗",
        "remark": null,
        "state": 0
      },
      {
        "id": 103,
        "name": "小黑妹要下诞",
        "remark": null,
        "state": 0
      },
      {
        "id": 104,
        "name": "翻新了地堡",
        "remark": null,
        "state": 0
      },
      {
        "id": 105,
        "name": "跨越星弧老狗吉洛",
        "remark": null,
        "state": 0
      },
      {
        "id": 106,
        "name": "在",
        "remark": null,
        "state": 0
      },
      {
        "id": 107,
        "name": "这个世界",
        "remark": null,
        "state": 0
      },
      {
        "id": 108,
        "name": "谁",
        "remark": null,
        "state": 0
      },
      {
        "id": 109,
        "name": "一天到晚",
        "remark": null,
        "state": 0
      },
      {
        "id": 110,
        "name": "死皮赖脸",
        "remark": null,
        "state": 0
      },
      {
        "id": 111,
        "name": "没日没夜",
        "remark": null,
        "state": 0
      },
      {
        "id": 112,
        "name": "舔着",
        "remark": null,
        "state": 0
      },
      {
        "id": 113,
        "name": "小黑",
        "remark": null,
        "state": 0
      },
      {
        "id": 114,
        "name": "妹",
        "remark": null,
        "state": 0
      },
      {
        "id": 115,
        "name": "问号",
        "remark": null,
        "state": 0
      },
      {
        "id": 116,
        "name": "问好",
        "remark": null,
        "state": 0
      },
      {
        "id": 117,
        "name": "家里装修啦",
        "remark": null,
        "state": 0
      },
      {
        "id": 118,
        "name": "伙伴整容啦",
        "remark": null,
        "state": 0
      },
      {
        "id": 119,
        "name": "外星人来啦",
        "remark": null,
        "state": 0
      },
      {
        "id": 120,
        "name": "修女也疯狂",
        "remark": null,
        "state": 0
      },
      {
        "id": 121,
        "name": "带城主上天",
        "remark": null,
        "state": 0
      },
      {
        "id": 122,
        "name": "你还挺懂球啊",
        "remark": null,
        "state": 0
      },
      {
        "id": 123,
        "name": "跨越星弧3月公测",
        "remark": null,
        "state": 0
      },
      {
        "id": 124,
        "name": "小年夜快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 125,
        "name": "黑妹送福",
        "remark": null,
        "state": 0
      },
      {
        "id": 126,
        "name": "大地回春",
        "remark": null,
        "state": 0
      },
      {
        "id": 130,
        "name": "噼里啪啦稀里哗啦啦",
        "remark": null,
        "state": 0
      },
      {
        "id": 131,
        "name": "地堡升明月",
        "remark": null,
        "state": 0
      },
      {
        "id": 132,
        "name": "两个礼包码",
        "remark": null,
        "state": 0
      },
      {
        "id": 133,
        "name": "红烧孤狼",
        "remark": null,
        "state": 0
      },
      {
        "id": 134,
        "name": "强中自有强中手",
        "remark": null,
        "state": 0
      },
      {
        "id": 135,
        "name": "胶质触手",
        "remark": null,
        "state": 0
      },
      {
        "id": 136,
        "name": "投入万丈温暖海洋",
        "remark": null,
        "state": 0
      },
      {
        "id": 138,
        "name": "在一起的第二年",
        "remark": null,
        "state": 0
      },
      {
        "id": 139,
        "name": "比快乐水还要快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 140,
        "name": "地堡是真的很不错",
        "remark": null,
        "state": 0
      },
      {
        "id": 141,
        "name": "withod",
        "remark": null,
        "state": 0
      },
      {
        "id": 142,
        "name": "一鼓作气一站到底",
        "remark": null,
        "state": 0
      },
      {
        "id": 143,
        "name": "小黑妹比云雀美",
        "remark": null,
        "state": 0
      },
      {
        "id": 144,
        "name": "平行宇宙交错相见",
        "remark": null,
        "state": 0
      },
      {
        "id": 145,
        "name": "小黑妹不是鸽子精",
        "remark": null,
        "state": 0
      },
      {
        "id": 146,
        "name": "铁甲依旧在",
        "remark": null,
        "state": 0
      },
      {
        "id": 147,
        "name": "月岛会降临",
        "remark": null,
        "state": 0
      },
      {
        "id": 148,
        "name": "爱你们3333",
        "remark": null,
        "state": 0
      },
      {
        "id": 149,
        "name": "百万尖兵步履不停",
        "remark": null,
        "state": 0
      },
      {
        "id": 150,
        "name": "四人行比有我师",
        "remark": null,
        "state": 0
      },
      {
        "id": 151,
        "name": "这不可能但很地堡",
        "remark": null,
        "state": 0
      },
      {
        "id": 152,
        "name": "深入地下见城堡",
        "remark": null,
        "state": 0
      },
      {
        "id": 153,
        "name": "万圣之星小黑妹",
        "remark": null,
        "state": 0
      },
      {
        "id": 154,
        "name": "听黑妹说八卦",
        "remark": null,
        "state": 0
      },
      {
        "id": 155,
        "name": "剁手节不吃土",
        "remark": null,
        "state": 0
      },
      {
        "id": 156,
        "name": "通关新手村",
        "remark": null,
        "state": 0
      },
      {
        "id": 157,
        "name": "云玩家出动",
        "remark": null,
        "state": 0
      },
      {
        "id": 158,
        "name": "感恩的心",
        "remark": null,
        "state": 0
      },
      {
        "id": 159,
        "name": "双十二特惠蚊子腿",
        "remark": null,
        "state": 0
      },
      {
        "id": 160,
        "name": "预告还是黑妹的好",
        "remark": null,
        "state": 0
      },
      {
        "id": 161,
        "name": "征战大空洞",
        "remark": null,
        "state": 0
      },
      {
        "id": 162,
        "name": "梦想成真",
        "remark": null,
        "state": 0
      },
      {
        "id": 163,
        "name": "地堡20",
        "remark": null,
        "state": 0
      },
      {
        "id": 164,
        "name": "巴斯克维尔的猎犬",
        "remark": null,
        "state": 0
      },
      {
        "id": 165,
        "name": "非酋的逆袭",
        "remark": null,
        "state": 0
      },
      {
        "id": 166,
        "name": "罗小黑战记",
        "remark": null,
        "state": 0
      },
      {
        "id": 167,
        "name": "死魂灵",
        "remark": null,
        "state": 0
      },
      {
        "id": 168,
        "name": "动视暴雪",
        "remark": null,
        "state": 0
      },
      {
        "id": 169,
        "name": "月明星稀",
        "remark": null,
        "state": 0
      },
      {
        "id": 170,
        "name": "圣骑士",
        "remark": null,
        "state": 0
      },
      {
        "id": 171,
        "name": "四书五经",
        "remark": null,
        "state": 0
      },
      {
        "id": 172,
        "name": "达尔文",
        "remark": null,
        "state": 0
      },
      {
        "id": 173,
        "name": "哥德巴赫",
        "remark": null,
        "state": 0
      },
      {
        "id": 174,
        "name": "亚特兰蒂斯",
        "remark": null,
        "state": 0
      },
      {
        "id": 175,
        "name": "普朗克",
        "remark": null,
        "state": 0
      },
      {
        "id": 176,
        "name": "奈亚子",
        "remark": null,
        "state": 0
      },
      {
        "id": 177,
        "name": "四面楚歌",
        "remark": null,
        "state": 0
      },
      {
        "id": 178,
        "name": "死灵之书",
        "remark": null,
        "state": 0
      },
      {
        "id": 179,
        "name": "黑暗之魂",
        "remark": null,
        "state": 0
      },
      {
        "id": 180,
        "name": "圣经",
        "remark": null,
        "state": 0
      },
      {
        "id": 181,
        "name": "赫拉克勒斯",
        "remark": null,
        "state": 0
      },
      {
        "id": 182,
        "name": "机动战士高达",
        "remark": null,
        "state": 0
      },
      {
        "id": 183,
        "name": "特朗普",
        "remark": null,
        "state": 0
      },
      {
        "id": 184,
        "name": "梵文",
        "remark": null,
        "state": 0
      },
      {
        "id": 185,
        "name": "风花雪月",
        "remark": null,
        "state": 0
      },
      {
        "id": 186,
        "name": "赛博朋克",
        "remark": null,
        "state": 0
      },
      {
        "id": 187,
        "name": "星之所在",
        "remark": null,
        "state": 0
      },
      {
        "id": 188,
        "name": "反转地堡",
        "remark": null,
        "state": 0
      },
      {
        "id": 189,
        "name": "带个黑妹回家过年",
        "remark": null,
        "state": 0
      },
      {
        "id": 190,
        "name": "飞跃2020",
        "remark": null,
        "state": 0
      },
      {
        "id": 191,
        "name": "砖鼠天使",
        "remark": null,
        "state": 0
      },
      {
        "id": 192,
        "name": "地堡只鼠于你",
        "remark": null,
        "state": 0
      },
      {
        "id": 193,
        "name": "地堡爱情故事",
        "remark": null,
        "state": 0
      },
      {
        "id": 194,
        "name": "不玩地堡要干嘛",
        "remark": null,
        "state": 0
      },
      {
        "id": 195,
        "name": "三月必胜",
        "remark": null,
        "state": 0
      },
      {
        "id": 196,
        "name": "不玩音乐玩地堡",
        "remark": null,
        "state": 0
      },
      {
        "id": 197,
        "name": "白色情人节快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 198,
        "name": "魂断清明",
        "remark": null,
        "state": 0
      },
      {
        "id": 199,
        "name": "清明不愚人",
        "remark": null,
        "state": 0
      },
      {
        "id": 200,
        "name": "一口气挖四层",
        "remark": null,
        "state": 0
      },
      {
        "id": 201,
        "name": "地堡肚肚",
        "remark": null,
        "state": 0
      },
      {
        "id": 202,
        "name": "地堡是门学问",
        "remark": null,
        "state": 0
      },
      {
        "id": 203,
        "name": "地堡微笑日",
        "remark": null,
        "state": 0
      },
      {
        "id": 204,
        "name": "地堡boss都很菜",
        "remark": null,
        "state": 0
      },
      {
        "id": 205,
        "name": "城主不大人",
        "remark": null,
        "state": 0
      },
      {
        "id": 206,
        "name": "想念罗拉娜",
        "remark": null,
        "state": 0
      },
      {
        "id": 207,
        "name": "感谢战斗过的你们",
        "remark": null,
        "state": 0
      },
      {
        "id": 208,
        "name": "安卓三周年",
        "remark": null,
        "state": 0
      },
      {
        "id": 209,
        "name": "乘风破浪的黑妹",
        "remark": null,
        "state": 0
      },
      {
        "id": 210,
        "name": "为终结黑潮而战",
        "remark": null,
        "state": 0
      },
      {
        "id": 211,
        "name": "地堡生日快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 212,
        "name": "下半场加油",
        "remark": null,
        "state": 0
      },
      {
        "id": 213,
        "name": "这是大鸡腿",
        "remark": null,
        "state": 0
      },
      {
        "id": 214,
        "name": "地堡防水符",
        "remark": null,
        "state": 0
      },
      {
        "id": 215,
        "name": "有更新真香",
        "remark": null,
        "state": 0
      },
      {
        "id": 216,
        "name": "苹果四周年快乐",
        "remark": null,
        "state": 0
      },
      {
        "id": 217,
        "name": "玩地堡不单身",
        "remark": null,
        "state": 0
      },
      {
        "id": 218,
        "name": "9月对我好一点",
        "remark": null,
        "state": 0
      },
      {
        "id": 219,
        "name": "客服牌香鸡腿",
        "remark": null,
        "state": 0
      },
      {
        "id": 220,
        "name": "地堡的月亮国庆圆",
        "remark": null,
        "state": 0
      },
      {
        "id": 221,
        "name": "老娘和你拼了",
        "remark": null,
        "state": 0
      },
      {
        "id": 222,
        "name": "地堡打工人",
        "remark": null,
        "state": 0
      },
      {
        "id": 223,
        "name": "地堡的可爱鬼",
        "remark": null,
        "state": 0
      },
      {
        "id": 236,
        "name": "今天我们都是派对动物",
        "remark": null,
        "state": 0
      },
      {
        "id": 237,
        "name": "米莱迪",
        "remark": "宝石*66",
        "state": 0
      },
      {
        "id": 238,
        "name": "莱姆米里斯",
        "remark": "宝石*66",
        "state": 0
      },
      {
        "id": 239,
        "name": "大空洞",
        "remark": "黑水晶*2",
        "state": 0
      },
      {
        "id": 240,
        "name": "瘟疫医生",
        "remark": "黑水晶*1",
        "state": 0
      },
      {
        "id": 241,
        "name": "克苏鲁",
        "remark": "金锭*1",
        "state": 0
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onCopy: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.code,
      success(res) {
        setTimeout(() => {
          wx.showToast({
            title: '登录游戏，找到系统设置；粘贴从这里领取的兑换码【' + e.currentTarget.dataset.code + '】',
            icon: 'none',
            duration: 3500
          });
        }, 2500);
      }
    });
  }
})