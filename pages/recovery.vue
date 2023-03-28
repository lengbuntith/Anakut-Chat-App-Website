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
      v-if="form == 'sendLinkRecovery'"
      @submit="sendLinkRecovery"
      style="max-width: 400px; width: 400px"
    >
      <div class="center">
        <Logo />
      </div>
      <h1 style="text-align: center">Recovery Password</h1>
      <van-field
        v-model="recoveryForm.email"
        name="Email"
        label="Email"
        placeholder="Email"
        :rules="[{ required: true, message: 'Email is required' }]"
      />

      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">
          Recovery
        </van-button>
      </div>
    </van-form>

    <van-form
      v-if="form == 'verifyLinkRecovery'"
      @submit="verifyLinkRecovery"
      style="max-width: 400px; width: 400px"
    >
      <div class="center">
        <Logo />
      </div>
      <h1 style="text-align: center">Recovery Password</h1>
      <div class="center" style="align-items: center">
        <span>
          <van-loading type="spinner" class="center" />
          <p style="opacity: 0.6" class="center">Verify Link</p>
        </span>
      </div>
    </van-form>

    <van-form
      v-if="form == 'changeNewPassword'"
      @submit="changeNewPassword"
      style="max-width: 400px; width: 400px"
    >
      <div class="center">
        <Logo />
      </div>
      <h1 style="text-align: center">Change New Password</h1>
      <van-field
        v-model="recoveryForm.newPassword"
        name="New Password"
        label="New Password"
        placeholder="New Password"
        type="password"
        :rules="[{ required: true, message: 'Password is required' }]"
      />

      <van-field
        v-model="recoveryForm.confirmPassword"
        name="Confirm Password"
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        :rules="[{ required: true, message: 'Confirm Password is required' }]"
      />

      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">
          Update New Password
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recoveryForm: {
        email: '',
        newPassword: '',
        confirmPassword: '',
      },

      verifyLink: {
        isLoading: '',
      },

      form: 'sendLinkRecovery',
      allowFormList: ['sendLinkRecovery', 'verifyLinkRecovery'],
    }
  },

  created() {
    const { form } = this.$route.query
    if (form) {
      //validate form
      let index = this.allowFormList.findIndex((f) => f == form)
      if (index == -1) return
      console.log('validated', index)
      this.form = form
    }
  },

  methods: {
    sendLinkRecovery() {
      console.log('sendLinkRecovery')
    },

    async verifyLinkRecovery() {
      console.log('verify link recovery')
      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    },

    changeNewPassword() {
      console.log('change new password')
    },
  },
}
</script>

<style lang="scss" scoped></style>
