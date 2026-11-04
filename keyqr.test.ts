namespace $.$$ {

	$mol_test({

		'Ключ виден только по запросу, отсканированное уходит наружу'( $ ) {

			const empty = $bog_keyqr.make({ $ })
			$mol_assert_equal( empty.rows(), [ empty.Scan() ] )

			const box = $bog_keyqr.make({ $, key: ()=> 'secret' })
			$mol_assert_equal( box.rows(), [ box.Show(), box.Scan() ] )

			box.Show().checked( true )
			$mol_assert_equal( box.rows(), [ box.Show(), box.Warning(), box.Qr(), box.Copy(), box.Scan() ] )
			$mol_assert_equal( box.Qr().uri(), 'secret' )

			box.Scan().found( 'other' )
			$mol_assert_equal( box.found(), 'other' )

		},

	})

}
