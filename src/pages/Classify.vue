<template>
<el-container>
    <el-header height= "45px">
      <div class="seach">
            <input type="seach" placeholder="请输入鲜花名称/关键字">
      </div>
    </el-header>
  <el-main>
    <el-aside width='100%'>
      <el-tabs :tab-position="tabPosition" style="height: 508px">
    <el-tab-pane label="花品">
          <img src="../assets/fen1.png" alt="">
          <div class="con">
            <a href="">
              <img src="../assets/m_c.png" alt="">
              <p>送女友鲜花</p>
            </a>
             <a href="">
              <img src="../assets/m_c.png" alt="">
              <p>送女友鲜花</p>
            </a>
             <a href="">
              <img src="../assets/m_c.png" alt="">
              <p>送女友鲜花</p>
            </a>
              <a href="">
              <img src="../assets/m_c.png" alt="">
              <p>送女友鲜花</p>
            </a>
          </div>
    </el-tab-pane>
    <el-tab-pane label="对象">花</el-tab-pane>
    <el-tab-pane label="色彩">品</el-tab-pane>
    <el-tab-pane label="场景">花品</el-tab-pane>
  </el-tabs>
    </el-aside>
  </el-main>
</el-container>
</template>
<script>
export default {
    name:'Classify',
    data(){
      return{
           tabPosition: 'left'
      }
    }
}
</script>
<style lang="scss" scoped>
.el-header{
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    padding: 6px 12px;
    line-height: 0;
    border-bottom: 1px solid  rgb(237, 237, 237);
    z-index: 9;
      .seach{
        width: 100%;
          input{
            width: 100%;
            height: 29px;
            background: #ffffff url(../assets/seach.png) no-repeat 8px center;
            background-size: 14px 15px;
            padding-left: 30px;
            box-sizing: border-box;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            background-color: rgb(237, 237, 237);
          }
        }
}
.el-aside{
  background: #ffffff;
  //  background-color: rgb(237, 237, 237);
   padding-top: 45px;
}
.el-main{
  height: 553px;
  padding: 0;
} 
.el-tab-pane{
  // background: #ffffff;
  height: 508px;
  padding-right: 10px;
  padding-top: 10px; 
    img{
      width: 100%
  }
  .con{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a{
      display: block;
      width: 33%;
      text-align: center;
      padding: 10px 0;
      color: #232323;
      img{
        width: 60px;
        height: 60px;
        border-radius: 100%;
        margin-bottom: 5px;
      }
    }
  }
}


</style>