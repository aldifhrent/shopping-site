export function createSlug(productName: string): string {
    return productName
      .toLowerCase()
      .replace(/\s+/g, '-')     // Ganti spasi dengan tanda hubung
      .replace(/[^\w\-]+/g, '') // Hapus karakter non-word
      .replace(/\-\-+/g, '-')   // Ganti multiple hyphens dengan satu hyphen
      .replace(/^-+/, '')       // Trim - dari awal teks
      .replace(/-+$/, '');      // Trim - dari akhir teks
}

