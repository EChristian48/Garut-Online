class Data {
  static URL() {
    return "http://localhost:4429/api";
  }

  static async getSiswa() {
    try {
        const response = await fetch(`${Data.URL()}/siswa`)        
        const responseJSON = await response.json();
        console.log(responseJSON);
        return responseJSON;
    } catch (error) {
        console.log(error);
    }
  }
}

export { Data };
