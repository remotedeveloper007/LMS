	<!-- Bootstrap JS -->
	<script src="{{ asset('/assets/backend/js/bootstrap.bundle.min.js') }}"></script>
	<!--plugins-->
	<script src="{{ asset('/assets/backend/js/jquery.min.js') }}"></script>
	<script src="{{ asset('/assets/backend/plugins/simplebar/js/simplebar.min.js') }}"></script>
	<script src="{{ asset('/assets/backend/plugins/metismenu/js/metisMenu.min.js') }}"></script>
	<!-- loader-->
	<script src="{{ asset('/assets/backend/plugins/perfect-scrollbar/js/perfect-scrollbar.js') }}"></script>
	<script src="{{ asset('/assets/backend/plugins/datatable/js/jquery.dataTables.min.js') }}"></script>
	<script src="{{ asset('/assets/backend/plugins/datatable/js/dataTables.bootstrap5.min.js') }}"></script>

	<script src="{{ asset('/assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.min.js') }}"></script>
    <script src="{{ asset('/assets/backend/plugins/vectormap/jquery-jvectormap-world-mill-en.js') }}"></script>
	<script src="{{ asset('/assets/backend/plugins/chartjs/js/chart.js') }}"></script>
	
	{{-- <script type="module" src="{{ asset('assets/backend/js/index.js') }}"></script> --}}
	<!--app JS-->
	{{-- <script src="{{ asset('assets/backend/js/app.js') }}"></script> --}}
	<script src="{{ asset('/assets/backend/js/validate.min.js') }}"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
	<script src="{{ asset('/assets/backend/js/code.js') }}"></script>


	<script>
		//new PerfectScrollbar(".app-container")
	</script>

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

	<script>
		@if(Session::has('message'))
			let type = "{{ Session::get('alert-type','info') }}"
			switch(type){
				case 'info':
				toastr.info(" {{ Session::get('message') }} ");
				break;

				case 'success':
				toastr.success(" {{ Session::get('message') }} ");
				break;

				case 'warning':
				toastr.warning(" {{ Session::get('message') }} ");
				break;

				case 'error':
				toastr.error(" {{ Session::get('message') }} ");
				break; 
			}
		@endif 
	</script>
	<script>
		$(document).ready(function() {
			$('#example').DataTable();
		  } );
	</script>
	<script>
		$(document).ready(function() {
			var table = $('#example2').DataTable( {
				lengthChange: false,
				buttons: [ 'copy', 'excel', 'pdf', 'print']
			} );
		 
			table.buttons().container()
				.appendTo( '#example2_wrapper .col-md-6:eq(0)' );
		});
	</script>