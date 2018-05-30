<template>
  <div class="banner">
    <div class="banner_login">
      <div class="login">
        <div class="login_top">
          <div class="switch" id="switch">
            <a class="switch_btn_focus" id="switch_qlogin" href="javascript:void(0);" tabindex="7">个人用户</a>
            <div class="switch_bottom" id="switch_bottom"></div>
          </div>
        </div>
        <!--个人登录-->
        <div class="web_qr_login" id="web_qr_login" style="display: block;">
          <div class="web_login" id="web_login">
            <div class="login-box">
              <div class="login_main">
                <div class="yhmp">
                  <input id="p_n" name="" type="text" class="input_name" placeholder="请输入手机号" onblur="" autocomplete="new-password">
                </div>
                <div class="yhmp">
                  <input id="p_p" name="input" type="password" class="input_pass" autocomplete="new-password">
                </div>
                <div class="yhmp">
                  <select id="cusFullNameSel" name="cusFullname" class="sel_full_name">
                  </select>
                </div>	
                <div class="yzmp">
                  <input id="checkNum" name="input" type="text" class="input_yzm" maxlength="4">
                  <a href="javascript:void(0)" onclick="" style="font-size: 10px;">
                    <span class="yzm_r">
                      <img id="checkNum_img" src="https://benefits.ciicfc.com/number.jsp" style="vertical-align: middle;">
                    </span>
                  </a>
                </div>
                <div class="wjmmp">
                  <a href="" class="key">忘记密码?</a>
                </div>
                <div class="denglup">
                  <a @click="go_login" id="loginIn">登录</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--个人登录end-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PerLogin',
  methods: {
    go_login () {
      this.$router.push({name: 'FirstPage'})
    }
  }
}
</script>

