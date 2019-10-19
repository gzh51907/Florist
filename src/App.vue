<template>
  <div>
    <div class="footer">
      <el-row v-if="this.$route.path=='/home' | this.$route.path=='/cart' | this.$route.path=='/mine' |
      $route.path=='/classify'">
        <el-col :span="6" v-for="item in menus" :key="item.name" >
          <router-link :to="item.path" active-class="current" >
            <div class="bg-purple" :class="item.icon"></div>
            <p>{{item.text}}</p>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <router-view style="padding-bottom:60px;" />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "/home",
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          name: "classify",
          path: "/classify",
          text: "分类",
          icon: "el-icon-tickets"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-full"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "el-icon-s-custom"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  a {
    color: black;
    div {
      color: black;
      p {
        color: black;
      }
    }
  }
  .current {
    color: #00bf9d !important;
    text-decoration: none;
    div {
      color: #00bf9d !important;
      text-decoration: none;
      p {
        color: #00bf9d !important;
        text-decoration: none;
      }
    }
  }
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
  font-size: 25px;
}
.bg-purple-light {
  background: #fff;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background: #fff;
}
</style>


