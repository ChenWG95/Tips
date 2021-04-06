# 关闭Chrome安全搜索

目前Chrome的安全搜索在中文地区（如：`www.google.com.hk`）下会默认开启，并且无法关闭。

当我们使用`www.google.com`默认搜索的时候也会根据地区自动重定向跳转到`wwww.google.com.hk`，安全搜索会导致很多时候我们需要搜索的内容并不能查询到。我今天也遇到了这个情况，于是记录以下解决方案

## 解决方案

1. 通过`www.google.com/ncr`（ncr：No Country Redirection 不进行国家区域重定向）跳转至对应搜索页


2. 通过访问[搜索偏好设置](https://www.google.com/preferences)关闭安全搜索功能

⚠️注意：此处如果是中文地区的搜索偏好设置，关闭之后还是会自动开启，所以必须切换到`www.google.com/ncr`再进行访问

![image-20210406115917804](https://tva1.sinaimg.cn/large/008eGmZEgy1gp9w1b773fj31ay0f40uv.jpg)

3. 然后我们可以修改Chrome的默认搜索引擎，防止Chrome默认使用`www.google.com.hk`

![image-20210406120137365](https://tva1.sinaimg.cn/large/008eGmZEgy1gp9w3kw95fj30kw0qejuh.jpg)

![image-20210406120327237](https://tva1.sinaimg.cn/large/008eGmZEgy1gp9w5icbnlj31o60oiq6t.jpg)

![image-20210406120345522](https://tva1.sinaimg.cn/large/008eGmZEgy1gp9w5tbyh3j31160j4ad1.jpg)

![image-20210406120402288](https://tva1.sinaimg.cn/large/008eGmZEgy1gp9w62yi4qj30ta0ko0up.jpg)
