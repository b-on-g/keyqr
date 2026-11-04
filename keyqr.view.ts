namespace $.$$ {

	export class $bog_keyqr extends $.$bog_keyqr {

		@ $mol_mem
		rows() {

			if( !this.key() ) return [ this.Scan() ]
			if( !this.shown() ) return [ this.Show(), this.Scan() ]

			return [ this.Show(), this.Warning(), this.Qr(), this.Copy(), this.Scan() ]
		}

	}

}
