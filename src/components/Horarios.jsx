import React from 'react'

const Horarios = () => {
	return (
		<div>
			<>
				<div className='container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto'>
					<div className='py-8 w-full'>
						<h1 className='text-center font-bold text-xl md:text-3xl text-gray-900 leading-tight'>
							Programación
						</h1>
						<p className='text-center font-bold text-xl md:text-2xl text-gray-900 leading-tight'>
							Sábado 10 de Diciembre 2022
						</p>
						<div className='shadow overflow-hidden rounded border-b border-gray-200'>
							<table className='min-w-full bg-white'>
								<thead className='bg-unid-yellow text-white'>
									<tr>
										<th className='w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm'>
											Evento
										</th>
										<th className='w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm'>
											Horario
										</th>
									</tr>
								</thead>
								<tbody className='text-gray-700'>
									<tr>
										<td className='w-1/3 text-left py-3 px-4'>Comunidado</td>
										<td className='w-1/3 text-left py-3 px-4'>12:00</td>
									</tr>

									<tr className='bg-gray-100'>
										<td className='w-1/3 text-left py-3 px-4'>Comunicado</td>
										<td className='w-1/3 text-left py-3 px-4'>12:00</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		</div>
	)
}

export default Horarios
