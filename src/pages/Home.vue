<template>

<el-container>
  <el-header height="45px"> 
    <div class="seach">
    <img src="../assets/seach.png" alt="">
  </div>
  <h3><img src="../assets/logo_new.png" alt=""></h3>
  <div class="tel">
      <img src="../assets/tel.png" alt="">
  </div>
  </el-header>
  <el-main style="padding:0">
      <el-carousel :interval="5000"  height= "196px">
    <el-carousel-item v-for="item in adlist" :key="item">
        <img :src="item" style="width:100%">
    </el-carousel-item>
  </el-carousel>
  <div class="banner-text">
<p class="banner-l">
  <img src="../assets/1.png" alt="">
  匠心花艺严选
</p>
<p class="banner-m">
  <img src="../assets/2.png" alt="">
  精准实时配送
</p>
<p class="banner-r">
  <img src="../assets/3.png" alt="">
  优质体验流程
</p>
  </div>
  <div class="contain">
    <h2 class="w1">热销款式</h2>
    <a href="" class="w2">
      <img src="../assets/w.png" alt="">
    </a>
    <div class="flex-box">
      <div class="flex-item">
        <div class="title" style="background-image: url('https://static.bloomapp.com.cn/0d03d4aa4396562763f9.jpg')"></div>
        <div class="cont">
          <h2>绚烂多姿</h2>
          <h3>33枝玫瑰、龙胆混搭；让我们的爱绚烂多姿</h3>
          <h4>299.00
            <span>379.00</span>
          </h4>
        </div>
      </div>
      <div class="flex-item">
        <div class="title"></div>
        <div class="cont">
          <h2>绚烂多姿</h2>
          <h3>33枝玫瑰、龙胆混搭；让我们的爱绚烂多姿</h3>
          <h4>299.00
            <span>379.00</span>
          </h4>
        </div>
      </div>
      <div class="flex-item">
        <div class="title" ></div>
        <div class="cont">
          <h2>绚烂多姿</h2>
          <h3>33枝玫瑰、龙胆混搭；让我们的爱绚烂多姿</h3>
          <h4>299.00
            <span>379.00</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
  </el-main>
</el-container>
</template>
<script>
export default {
    name:'Home',
    data(){
      return{
        adlist:[
         require("../assets/1.jpg",),
          require("../assets/2.jpg"),
           require("../assets/3.jpg")         
        ],
      }
    }
}
</script>
<style lang="scss" >
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-header{
  display: flex;
  justify-content: space-between;
}
.seach img{
  height: 25px;
  width: 25px;
}
h3 img{
 height: 22px;
 width: 113px;
}
.tel img{
    width: 24px;
    height: 25px;
}
.el-main{
  background: rgb(244, 244, 244);
  overflow: auto;
}
  .banner-text{
    display: flex;
    background-color: #fff;
    font-size: 12px;
    line-height: 35px;
  }
  .banner-text>p{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 11px;
      height: 12px;
    }
  }
  .contain{
    padding-left: 18px;
    padding-right: 18px;
  }
.w1{
  font-size: 15px;
  position: relative;
  text-align: center;
  line-height: 27px;
}
.w1::before{
  border-top: 2px solid #bfbfbf;
  content: "";
  left: 50%;
  top: 50%;
  position: absolute;
  width: 60px;
  margin-left: 40px;
}
.w1::after{
  border-top: 2px solid #bfbfbf;
  content: "";
  left: 50%;
  top: 50%;
  position: absolute;
  width: 60px;
  margin-left: -102px;
}
.w2{
  float: right;
  padding-top: 12px;
  padding-bottom: 12px;
}
.w2 img{
 width: 351px;
 height: 185px;
}
 .flex-box{
   display: flex;
   justify-content: space-between;
    width: 100%;
    flex-wrap: wrap
 }
 .flex-item{
   display: flex;
   width: 48%;
   border: 1px solid #e5e5e5;
   margin-bottom: 12px;
   flex-direction: column;
 }
 .title{
   width: 100%;
   height: 244px;
   background-size: cover;
 }
 .cont{
   padding: 0 16px;
   h2{
     line-height: 25px;
    font-size: 15px;
    color: #333333;
    margin: 0px;
    font-weight: normal;
    margin-top: 5px;
   }
   h3{
     line-height:19px;
    font-size: 14px;
    color: #999999;
    margin: 0px;
    font-weight: normal;
   }
   h4{
     line-height: 33px;
    color: #df4d28;
    font-size: 13px;
    margin: 0px;
    font-weight: normal;
    border-top: 1px solid #f5f5f5;
    margin-top: 5px;
    span{
      line-height: 33px;
    font-size:12px;
    color: #646464;
    margin: 0px;
    font-weight: normal;
    text-decoration: line-through;
    margin-left: 5px;
    }
   }
 }
 .el-footer{
  color: rgb(84, 84, 84);
}
</style>