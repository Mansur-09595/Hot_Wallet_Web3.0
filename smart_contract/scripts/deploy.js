const hre = require("hardhat");

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const balance = await deployer.getBalance();
  console.log("Баланс аккаунта:", hre.ethers.utils.formatEther(balance));

  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");

  // Получаем текущую цену газа
  const gasPrice = await hre.ethers.provider.getGasPrice();
  console.log("Текущая цена газа:", hre.ethers.utils.formatUnits(gasPrice, "gwei"), "gwei");

  // Оцениваем стоимость газа для деплоя
  const estimatedGas = await transactionsFactory.signer.estimateGas(
    transactionsFactory.getDeployTransaction()
  );
  console.log("Оценка газа для деплоя:", estimatedGas.toString());

  // Рассчитываем максимальную стоимость транзакции
  const maxFeePerGas = gasPrice.mul(2);
  const maxPriorityFeePerGas = hre.ethers.utils.parseUnits("1", "gwei");

  console.log("Максимальная цена за газ:", hre.ethers.utils.formatUnits(maxFeePerGas, "gwei"), "gwei");
  console.log("Максимальный приоритетный сбор:", hre.ethers.utils.formatUnits(maxPriorityFeePerGas, "gwei"), "gwei");

  const transactionsContract = await transactionsFactory.deploy({
    maxFeePerGas: maxFeePerGas,
    maxPriorityFeePerGas: maxPriorityFeePerGas,
    gasLimit: estimatedGas.mul(120).div(100) // Добавляем 20% к оценке газа для безопасности
  });

  await transactionsContract.deployed();

  console.log("Адрес контракта Transactions: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();