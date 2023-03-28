<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    "
  >
    <van-form
      v-if="form == 'login'"
      @submit="loginHandler"
      style="max-width: 400px; width: 400px"
    >
      <div class="center">
        <Logo />
      </div>
      <h1 style="text-align: center">Sign in to Anakut</h1>
      <van-field
        v-model="loginForm.email"
        name="Email"
        label="Email"
        placeholder="Email"
        :rules="[{ required: true, message: 'Email is required' }]"
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        name="Password"
        label="Password"
        placeholder="Password"
        :rules="[{ required: true, message: 'Password is required' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit"> Login </van-button>

        <div
          style="margin-top: 16px; justify-content: space-between"
          class="flex"
        >
          <van-checkbox v-model="rememberMe" shape="square" style="opacity: 0.5"
            >Remember me</van-checkbox
          >

          <h5
            @click="$store.dispatch('goTo', '/recovery')"
            class="pointer"
            style="color: #1989fa"
          >
            Recovery Password
          </h5>
        </div>
      </div>

      <div class="center">
        <p style="margin-right: 10px; opacity: 0.5">
          Don't have an account yet?
        </p>
        <h5 @click="form = 'register'" class="pointer" style="color: #1989fa">
          Sign Up
        </h5>
      </div>
    </van-form>

    <van-form
      v-if="form == 'register'"
      @submit="registerHandler"
      style="max-width: 400px; width: 400px"
    >
      <div class="center">
        <Logo />
      </div>
      <h1 style="text-align: center">Create an account</h1>
      <van-field
        v-model="registerForm.name"
        name="Name"
        label="Name"
        placeholder="Name"
        :rules="[{ required: true, message: 'Name is required' }]"
      />
      <van-field
        v-model="registerForm.email"
        name="Email"
        label="Email"
        placeholder="Email"
        :rules="[{ required: true, message: 'Email is required' }]"
      />
      <van-field
        v-model="registerForm.password"
        type="password"
        name="Password"
        label="Password"
        placeholder="Password"
        :rules="[{ required: true, message: 'Password is required' }]"
      />
      <van-field
        v-model="registerForm.confirmPassword"
        type="password"
        name="Confirm"
        label="Confirm"
        placeholder="Confirm"
        :rules="[{ required: true, message: 'Confirm Password is required' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">
          Sign Up
        </van-button>
      </div>

      <div class="center">
        <p style="margin-right: 10px; opacity: 0.5">
          Do have an account already?
        </p>
        <h5 @click="form = 'login'" class="pointer" style="color: #1989fa">
          Sign in
        </h5>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: 'login',
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      rememberMe: false,
    }
  },

  methods: {
    loginHandler() {
      console.log('login')
    },

    registerHandler() {
      console.log('register')
    },
  },
}
</script>

<style lang="scss" scoped></style>
