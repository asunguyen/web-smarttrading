<template>
  <div class="login-container">
    <el-form ref="signupForm" :model="signupForm" :rules="signupRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container mb-4">
        <h3 class="title">Đăng ký</h3>
        <div class="description">Vui lòng nhập đầy đủ thông tin cần thiết để tạo tài khoản mới</div>
      </div>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="signupForm.username"
          placeholder="Tên người dùng"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          ref="email"
          v-model="signupForm.email"
          placeholder="Địa chỉ email"
          name="email"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="phone">
        <el-input
          ref="phone"
          v-model="signupForm.phone"
          placeholder="Số điện thoại"
          name="phone"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          ref="password"
          v-model="signupForm.password"
          :type="passwordType"
          placeholder="Mật khẩu"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup.enter.native="handleSignup"
        />
        <span class="show-pwd" @click="showPassword">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item prop="checkPassword">
        <el-input
          ref="checkPassword"
          v-model="signupForm.checkPassword"
          :type="passwordType2"
          placeholder="Xác nhận mật khẩu"
          name="checkPassword"
          tabindex="2"
          autocomplete="on"
          @keyup.enter.native="handleSignup"
        />
        <span class="show-pwd" @click="showConfirmPassword">
          <svg-icon :icon-class="passwordType2 === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleSignup">Đăng ký</el-button>

      <div class="forgot-pass mb-1">Quên mật khẩu?</div>
      <div><router-link to="/login" class="signup">Đăng nhập tại đây</router-link></div>
    </el-form>
  </div>
</template>

<script>
import { signup } from '@/api/user'

export default {
  name: 'Login',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Vui lòng nhập mật khẩu'))
      } else {
        if (this.signupForm.checkPassword !== '') {
          this.$refs.signupForm.validateField('checkPassword')
        }
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Vui lòng nhập xác nhận mật khẩu'))
      } else if (value !== this.signupForm.password) {
        callback(new Error('Xác nhận mật khẩu không khớp'))
      } else {
        callback()
      }
    }
    return {
      signupForm: {
        username: '',
        email: '',
        phone: '',
        password: '',
        checkPassword: ''
      },
      signupRules: {
        username: [{ required: true, trigger: 'blur', message: 'Vui lòng nhập tên người dùng' }],
        email: [
          { required: true, trigger: 'blur', message: 'Vui lòng nhập địa chỉ email' },
          { type: 'email', message: 'Vui lòng nhập địa chỉ email đúng định dạng', trigger: ['blur', 'change'] }
        ],
        phone: [{ required: true, trigger: 'blur', message: 'Vui lòng nhập số điện thoại' }],
        password: [{ trigger: 'blur', validator: validatePassword }],
        checkPassword: [{ trigger: 'blur', validator: validateConfirmPassword }]
      },
      passwordType: 'password',
      passwordType2: 'password',
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    showPassword() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    showConfirmPassword() {
      if (this.passwordType2 === 'password') {
        this.passwordType2 = ''
      } else {
        this.passwordType2 = 'password'
      }
      this.$nextTick(() => {
        this.$refs.checkPassword.focus()
      })
    },
    handleSignup() {
      this.$refs.signupForm.validate(async valid => {
        if (valid) {
          this.loading = true
          const response = await signup()
          console.log(response)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: black;
      height: 47px;
      /* caret-color: $cursor; */

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 80px 35px 60px;
    overflow: hidden;
    background-color: white;
    border-radius: 4px;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 28px;
      margin: 0px auto 20px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .description {
    font-size: 14px;
    color: gray;
  }

  .forgot-pass,
  .signup {
    font-size: 14px;
    color: #1890ff;
    cursor: pointer;
  }
}
</style>
