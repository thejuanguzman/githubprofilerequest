class Github {
  constructor(){
    this.client_id = 'eaaeea163c882dd6c0b8';
    this.client_secret = 'a4d7bcbb2c645adc7d0763b185eb528f6113cf30';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }

}