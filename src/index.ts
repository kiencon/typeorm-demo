import { Detergent } from './entity';
import {
  DetergentFormulaRepository,
  DetergentRepository,
  getRepository
} from './repository';
import UnitOfWork from './unitOfWork';

const demo = async () => {
  const detergentRepository1 = await getRepository(DetergentRepository);
  let total = await detergentRepository1.count();
  console.log('total ', total);
  try {
    const uow = new UnitOfWork();
    await uow.startTransaction();
    const detergentRepository = uow.getRepository(Detergent);
    const work = async () => {
      await Promise.all([
        detergentRepository.save({
          name: 'fail',
          number: 1
        }),
        detergentRepository.save({
          name: 'fail'
        })
      ]);
    };
    await uow.complete(work);
  } catch (error) {
    console.log(error);
  }
  const detergentFormulaRepository = await getRepository(
    DetergentFormulaRepository
  );
  total = await detergentFormulaRepository.count();
  console.log('total ', total);
  process.exit(0);
};

demo();
